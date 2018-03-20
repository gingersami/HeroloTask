import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (value === null) {
      return 'Not assigned';
    }
    const newVal = value.replace(/[-!$%@^&*()_+|~=`{}\[\]:";<>?,.\/]/g, '');
    return newVal.charAt(0).toUpperCase() + newVal.slice(1);
  }
}

