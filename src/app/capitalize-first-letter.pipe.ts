import {Pipe, PipeTransform} from '@angular/core';

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

@Pipe({
  name: 'capitalizeFirst'
})

export class CapitalizeFirstPipe implements PipeTransform {
  transform(value: string): string {
    if (value === null) {
      return 'Not assigned';
    }
    const newVal = value.replace(/[-!$%@^&*()_+|~=`{}\[\]:";<>?,.\/]/g, '');
    return newVal.split(/\b/g).map(word => titleCaseWord(word)).join('');
  }
}

