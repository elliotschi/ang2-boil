import { Injectable } from '@angular/core';

@Injectable()

export class IndexService {
  getHelloWorld() {
    return Promise.resolve('hello world');
  }
}