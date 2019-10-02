import { Component } from '@angular/core';
import { FileManagementService } from 'src/app/services/file-management.service';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent {
  constructor(public fileManagementService: FileManagementService) {}
}
