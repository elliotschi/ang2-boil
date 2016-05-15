import { Component, OnInit } from '@angular/core';
import { IndexService } from '../services/index.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'index',
  templateUrl: 'app/templates/index.component.html'
})

export class IndexComponent implements OnInit {
  message: string;

  constructor(
    private indexService: IndexService,
    private router: Router
  ){}

  ngOnInit() {
    const { getHelloWorld } = this.indexService;

    getHelloWorld()
      .then(hello => this.message = hello);
  }

}