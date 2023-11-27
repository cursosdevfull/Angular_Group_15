import { NgModule } from '@angular/core';

import { FxLayoutAlignDirective } from './directives/fx-layout-align.directive';
import { FxLayoutDirective } from './directives/fx-layout.directive';

@NgModule({
  declarations: [FxLayoutDirective, FxLayoutAlignDirective],
  exports: [FxLayoutDirective, FxLayoutAlignDirective],
})
export class GridModule {}
