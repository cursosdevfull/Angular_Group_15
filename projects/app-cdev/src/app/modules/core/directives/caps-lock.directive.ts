import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[cdev-caps-lock]',
})
export class CapsLockDirective {
  @Output() onCapsLock = new EventEmitter<boolean>();

  @HostListener('window:keydown', ['$event'])
  checkCapsLock(event: KeyboardEvent) {
    this.onCapsLock.emit(
      event.getModifierState && event.getModifierState('CapsLock')
    );
  }
}
