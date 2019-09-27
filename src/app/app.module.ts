import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
  declarations: [AppComponent, DragDropDirective, FileUploaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
