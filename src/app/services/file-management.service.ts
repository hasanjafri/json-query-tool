import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {
  files: any = [];
  filesSub: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
      this.filesSub.next(this.files);
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.filesSub.next(this.files);
  }
}
