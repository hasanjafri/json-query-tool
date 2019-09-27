import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileManagementService } from 'src/app/services/file-management.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit, OnDestroy {
  files: any = [];
  filesSub: Subscription;

  constructor(private fileManagementService: FileManagementService) {}

  async ngOnInit() {
    this.filesSub = await this.fileManagementService.filesSub.subscribe((files) => (this.files = files));
  }

  ngOnDestroy() {
    if (this.filesSub) {
      this.filesSub.unsubscribe();
    }
  }

  uploadFile(event) {
    this.fileManagementService.uploadFile(event);
  }

  deleteAttachment(index) {
    this.fileManagementService.deleteAttachment(index);
  }
}
