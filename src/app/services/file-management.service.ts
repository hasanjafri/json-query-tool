import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {
  files: any = [];
  filesSub: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  openedFile = {};
  queriedData = {};

  constructor(private http: HttpClient) {}

  uploadFile(event) {
    console.log(event);
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push({ name: element.name, path: element.path });
      this.filesSub.next(this.files);
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.filesSub.next(this.files);
  }

  loadFile(filePath) {
    this.http.get(filePath).subscribe((json) => {
      this.openedFile = json;
      this.queriedData = json;
    });
  }

  resetQueries() {
    this.queriedData = this.openedFile;
  }
}
