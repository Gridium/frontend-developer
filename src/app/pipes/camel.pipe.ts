import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'camelToHuman'
})

@Injectable()
export class CamelToHumanPipe implements PipeTransform {
 transform(items: any[]): any[] {
    const camelToHuman = function(item){
      return item.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
        return x[0].toUpperCase() + x.substr(1).toLowerCase();
      }).join(' ');
    };
    const humanReadable = camelToHuman(items);
    return humanReadable;
 }
}
