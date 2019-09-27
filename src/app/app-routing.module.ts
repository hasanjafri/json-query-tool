import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';

const routes: Routes = [{ path: 'uploadJson', component: FileUploaderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
