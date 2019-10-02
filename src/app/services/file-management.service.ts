import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {
  files: any = [];
  filesSub: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  openedFile = {};

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
}
