import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[fxLayout]',
})
export class FxLayoutDirective {
  @Input() fxLayout: string;

  constructor(private readonly elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.calculateLayout();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes fxlayout', changes);
    this.calculateLayout();
  }

  calculateLayout() {
    this.elementRef.nativeElement.style.display = 'flex';
    if (this.fxLayout) {
      const values = this.fxLayout.split(' ');
      if (values.length === 1) {
        this.elementRef.nativeElement.style.flexDirection = values[0];
      } else {
        this.elementRef.nativeElement.style.flexFlow = this.fxLayout;
      }
    }
  }
}
