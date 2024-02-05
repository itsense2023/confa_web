import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dinamic',
  templateUrl: './modal-dinamic.component.html',
  styleUrl: './modal-dinamic.component.scss',
})
export class ModalDinamicComponent {
  @Input() login = false;
  @Input() select = false;
  @Input() message = '';
  @Input() visible: boolean = false;
  @Output() setRta = new EventEmitter<boolean>();

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.setRta.emit(false);
    this.visible = false;
  }
}
