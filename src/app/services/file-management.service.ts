import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { WarningDialogComponent } from '../components/warning-dialog/warning-dialog.component';
import { JsonQueryService } from './json-query.service';
import { OverlayService } from './overlay.service';
import isEqual from 'lodash.isequal';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {
  files: any = [];
  filesSub: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  openedFile = {};
  queriedData = {};
  openedFilePath = '';
  decisionSub: Subscription;

  constructor(
    private http: HttpClient,
    private jsonQueryService: JsonQueryService,
    private overlayService: OverlayService
  ) {}

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push({ name: element.name, path: element.path });
      this.filesSub.next(this.files);
    }
  }

  deleteAttachment(index) {
    if (this.files[index].path === this.openedFilePath) {
      this.openedFile = {};
      this.queriedData = {};
      this.openedFilePath = '';
    }
    this.files.splice(index, 1);
    this.filesSub.next(this.files);
  }

  loadFile(filePath) {
    this.http.get(filePath).subscribe((json) => {
      this.openedFile = json;
      this.queriedData = json;
      this.openedFilePath = filePath;
    });
  }

  resetQueries() {
    if (!isEqual(this.queriedData, this.openedFile)) {
      this.overlayService.open(WarningDialogComponent, {
        warningText: 'Are you sure you want to reset ALL queries?'
      });
      this.decisionSub = this.overlayService.decisionSub.subscribe(
        (decision) => {
          if (decision) {
            this.queriedData = this.openedFile;
            this.decisionSub.unsubscribe();
          }
        }
      );
    }
  }

  queryJson(queryExpr: string) {
    this.queriedData = this.jsonQueryService.query(this.queriedData, queryExpr);
  }
}
