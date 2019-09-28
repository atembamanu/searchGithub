import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHyphens'
})
export class RemoveHyphensPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
