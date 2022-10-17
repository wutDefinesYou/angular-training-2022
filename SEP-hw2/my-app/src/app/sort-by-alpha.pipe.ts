import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByAlpha'
})
export class SortByAlphaPipe implements PipeTransform {

  transform(users: any[]): any[] {
    return users.sort((a: any, b: any) => {
      if (a.firstName < b.firstName) return -1
      if (a.firstName > b.firstName) return 1
      return 0
    })
  }
}
