import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar',
})
export class RecortarPipe implements PipeTransform {
  transform(value: string, max: number) {
    if (value.length <= max) return value;

    return value.substring(0, max);
  }
}
