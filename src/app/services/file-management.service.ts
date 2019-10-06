import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WarningDialogComponent } from '../components/warning-dialog/warning-dialog.component';
import { JsonQueryService } from './json-query.service';
import { OverlayService } from './overlay.service';
var isEqual = require('lodash.isequal');

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {
  files: any = [];
  filesSub: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  openedFile = {};
  queriedData = {};
  openedFilePath = '';

  constructor(private http: HttpClient, private jsonQueryService: JsonQueryService, private overlayService: OverlayService) {}

  uploadFile(event) {
    console.log(event);
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
      this.overlayService.open(WarningDialogComponent);
    }
  }

  queryJson(queryExpr: string) {
    this.queriedData = this.jsonQueryService.query(this.queriedData, queryExpr);
    console.log('>>>>>', this.queriedData);
  }
}
