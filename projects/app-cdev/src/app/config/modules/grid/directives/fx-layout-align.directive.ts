import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxLayoutAlign]',
})
export class FxLayoutAlignDirective {
  @Input() fxLayoutAlign: string;

  constructor(private readonly elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.calculateAlign();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.calculateAlign();
  }

  calculateAlign() {
    const values = this.fxLayoutAlign.split(' ');
    if (values.length === 1) {
      this.elementRef.nativeElement.style.justifyContent = values[0];
    } else if (values.length === 2) {
      this.elementRef.nativeElement.style.justifyContent = values[0];
      this.elementRef.nativeElement.style.alignItems = values[1];
    }
  }
}
