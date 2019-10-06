import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  constructor(private overlay: Overlay) {}

  open(overlayType) {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
    const queryHandlerPortal = new ComponentPortal(overlayType);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    overlayRef.attach(queryHandlerPortal);
  }
}
