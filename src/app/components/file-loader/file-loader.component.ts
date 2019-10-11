import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileManagementService } from 'src/app/services/file-management.service';

@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.scss']
})
export class FileLoaderComponent implements OnInit, OnDestroy {
  @Output() fileLoader = new EventEmitter<string>();

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

  loadFile(filePath) {
    this.fileLoader.emit(filePath);
  }
}
