import {FormControl} from '@angular/forms';

export class AppValidators {

  static fullName(control: FormControl): { [key: string]: boolean } {
    const arr = control.value
      .trim()
      .split(' ')
      .filter(item => item !== '');
    if (
      arr.length > 2 ||
      arr.length !== 2 &&
      arr.length > 0) {
      return {fullName: true};
    }

    return null;
  }

  static startsFromCapital(control: FormControl): { [key: string]: boolean } {
    const arr = control.value
      .trim()
      .split(' ')
      .filter(item => item !== '')
      .filter(item => !item.match(/^[A-ZА-Я]/));

    if (arr.length > 0) {
      return {startsFromCapital: true};
    }
    return null;
  }

}
