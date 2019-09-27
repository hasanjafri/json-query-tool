import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { FileLoaderComponent } from './components/file-loader/file-loader.component';

@NgModule({
  declarations: [AppComponent, DragDropDirective, FileUploaderComponent, JsonViewerComponent, FileLoaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule, NgxJsonViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
