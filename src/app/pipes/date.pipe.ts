import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'milliToDate'
})

// filter for converting milliseconds to a date object

@Injectable()
export class MilliToDatePipe implements PipeTransform {
 transform(data) {
    return new Date(data).toString();
 }
}
