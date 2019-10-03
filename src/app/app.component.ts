import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FileManagementService } from './services/file-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-query-tool';

  constructor(private fileManagementService: FileManagementService, public router: Router) {}

  resetQueries() {
    this.fileManagementService.resetQueries();
  }
}
