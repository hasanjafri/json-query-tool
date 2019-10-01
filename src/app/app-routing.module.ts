import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { JsonQueryContainerComponent } from './components/json-query-container/json-query-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/jsonQueryTool', pathMatch: 'full' },
  { path: 'uploadJson', component: FileUploaderComponent },
  { path: 'jsonQueryTool', component: JsonQueryContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
