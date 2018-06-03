import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divide'
})
export class DividePipe implements PipeTransform {

  transform(arr: string[]) {
    return arr.join(', ');
  }

}