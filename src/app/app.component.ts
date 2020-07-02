import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { QueryHandlerComponent } from './components/query-handler/query-handler.component';
import { FileManagementService } from './services/file-management.service';
import { OverlayService } from './services/overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('queryButton', { static: false }) queryButton: ElementRef;

  title = 'json-query-tool';

  constructor(
    public fileManagementService: FileManagementService,
    public router: Router,
    private overlayService: OverlayService
  ) {}

  resetQueries() {
    this.fileManagementService.resetQueries();
  }

  queryData() {
    this.overlayService.open(QueryHandlerComponent);
  }
}
