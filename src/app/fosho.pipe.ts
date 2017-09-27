import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'foSho'
})

@Injectable()
export class FoShoPipe implements PipeTransform {
 transform(items) {
    if (items = true) {
      return 'Fo Sho!';
    } else {
      return 'Nah';
    }
 }
}
