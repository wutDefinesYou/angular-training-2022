import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(users: any[], keyword: string): any[] {
    return users.filter(user => {
      return user.firstName.toLowerCase().includes(keyword.toLocaleLowerCase())
    })
  }
}
