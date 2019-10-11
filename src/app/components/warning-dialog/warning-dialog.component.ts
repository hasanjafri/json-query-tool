import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { OVERLAY_DATA } from 'src/app/config/overlay.config';

@Component({
  selector: 'app-warning-dialog',
  templateUrl: './warning-dialog.component.html',
  styleUrls: ['./warning-dialog.component.scss']
})
export class WarningDialogComponent {
  @Output() decisionEmitter = new EventEmitter<boolean>();

  constructor(@Inject(OVERLAY_DATA) public overlayProps) {}

  yes() {
    this.decisionEmitter.emit(true);
  }

  no() {
    this.decisionEmitter.emit(false);
  }
}
