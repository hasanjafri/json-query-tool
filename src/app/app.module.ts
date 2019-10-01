import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileLoaderComponent } from './components/file-loader/file-loader.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { JsonViewerComponent } from './components/json-viewer/json-viewer.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { JsonQueryContainerComponent } from './components/json-query-container/json-query-container.component';

@NgModule({
  declarations: [AppComponent, DragDropDirective, FileUploaderComponent, JsonViewerComponent, FileLoaderComponent, JsonQueryContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    NgxJsonViewerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
