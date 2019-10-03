import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { QueryHandlerComponent } from '../components/query-handler/query-handler.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  constructor(private overlay: Overlay) {}

  open() {
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
    const queryHandlerPortal = new ComponentPortal(QueryHandlerComponent);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
    overlayRef.attach(queryHandlerPortal);
  }
}
