import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'keys'
})

// filter objects and extract keys to iterate ove in ngFor

@Injectable()
export class KeysPipe implements PipeTransform {
  transform(value, args: string[]): any {
    const keys = [];
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            // check value type, if object don't push to array in order to filter
            // out unneeded data
            if (typeof value[key] === 'string') {
                keys.push({key: key, value: value[key]});
            }
        }
    }
    return keys;
  }
}
