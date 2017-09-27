import {
  Injectable,
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'foSho'
})

// gotta have some attitude with the booleans

@Injectable()
export class FoShoPipe implements PipeTransform {
  transform(items) {
    // return a random number 1-10
    const num = Math.floor(Math.random() * 10 + 1);
    let response = '';
    if (items = true) {
      switch (num) {
        case 1:
          response = 'Fo Sho';
          break;
        case 2:
          response = 'Affirmative';
          break;
        case 3:
          response = 'Yay yay!';
          break;
        case 4:
          response = 'You know it!';
          break;
        case 5:
          response = 'Uh huh';
          break;
        case 6:
          response = '*nods';
          break;
        case 7:
          response = 'Yup';
          break;
        case 8:
          response = 'Hai';
          break;
        case 9:
          response = 'Yes';
          break;
        case 10:
          response = 'Aye';
          break;
      }
      return response;
    } else {
      return 'Nope';
    }
  }
}
