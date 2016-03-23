import {Pipe} from 'angular2/core';

@Pipe({
  name: "search"
})

export class SearchPipe{
  transform(value, [term]) {
    console.log(value, 'this is the search pipe');
    return value.filter(item => 
      item.title.startsWith(term)
    );
  }
}