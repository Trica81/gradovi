import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'latin',
  pure: true
})
export class LatinPipe implements PipeTransform {

  transform(value: String, args?: any): any {

    const A = {};
    let result = '';

    A['Ć'] = 'C'; A['ć'] = 'c';
    A['Č'] = 'C'; A['č'] = 'c';
    A['Ž'] = 'Z'; A['ž'] = 'z';
    A['Š'] = 'S'; A['š'] = 's';
    A['Đ'] = 'Dj'; A['đ'] = 'dj';


    for (let i = 0; i < value.length; i++) {
      const c = value.charAt(i);

      result += A[c] || c;
    }

    return result;
  }

}
