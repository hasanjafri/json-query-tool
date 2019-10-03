import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { QueryHandlerComponent } from '../components/query-handler/query-handler.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  constructor(private overlay: Overlay) {}

  open(elementRef) {
    const overlayRef = this.overlay.create({
      width: '300px',
      height: '200px',
      positionStrategy: this.overlay
        .position()
        .connectedTo(elementRef, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      panelClass: 'tm-file-preview-dialog-panel',
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
    const queryHandlerPortal = new ComponentPortal(QueryHandlerComponent);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    overlayRef.attach(queryHandlerPortal);
  }
}
