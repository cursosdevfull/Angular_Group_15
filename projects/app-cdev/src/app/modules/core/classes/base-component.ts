import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { Metadatas } from '../../shared/components/table/metadata.interface';

@Component({ selector: 'base-component', template: '' })
export abstract class BaseComponent<Entity> {
  abstract metadata: Metadatas;
  subject = new Subject<void>();
  flexDirection = 'row';
  pageSize = 30;
  quantityRecords = 0;
  data: Array<Entity> = [];

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subject.next();
    this.subject.unsubscribe();
  }
}
