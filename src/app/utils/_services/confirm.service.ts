import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../_components/confirm/confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  constructor(
    private modalService: NgbModal,) { }

  public open(options: any = {
    title: 'title',
    message: 'message',
    btnOkText: 'OK',
    btnCancelText: 'Cancel'
  }): Promise<boolean> {
    const modal = this.modalService.open(ConfirmComponent, { size: 'md' });
    modal.componentInstance.title = options.title;
    modal.componentInstance.message = options.message;
    modal.componentInstance.btnOkText = options.btnOkText;
    modal.componentInstance.btnCancelText = options.btnCancelText;
    return modal.result;
  }
}
