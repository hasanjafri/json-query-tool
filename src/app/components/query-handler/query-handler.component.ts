import { Component } from '@angular/core';
import { FileManagementService } from 'src/app/services/file-management.service';

@Component({
  selector: 'app-query-handler',
  templateUrl: './query-handler.component.html',
  styleUrls: ['./query-handler.component.scss']
})
export class QueryHandlerComponent {
  constructor(private fileManagementService: FileManagementService) {}

  queryJson(queryExpr: string) {
    console.log(queryExpr);
    this.fileManagementService.queryJson(queryExpr);
  }
}
