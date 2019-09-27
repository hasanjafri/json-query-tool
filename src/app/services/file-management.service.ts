import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileManagementService {
  files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name);
    }
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
