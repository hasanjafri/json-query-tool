import { Component } from '@angular/core';
import { FileManagementService } from 'src/app/services/file-management.service';

@Component({
  selector: 'app-json-query-container',
  templateUrl: './json-query-container.component.html',
  styleUrls: ['./json-query-container.component.scss']
})
export class JsonQueryContainerComponent {
  constructor(private fileManagementService: FileManagementService) {}

  loadFile(filePath) {
    this.fileManagementService.loadFile(filePath);
  }
}
