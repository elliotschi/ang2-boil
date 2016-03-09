import {Pipe} from 'angular2/core';

@Pipe({
  name: "start"
})

export class StartPipe {
  transform(value) {
    return value.filter(item =>
      item.status === 'started'
    );
  }
}