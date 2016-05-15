import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { IndexComponent } from './index.component.ts';
import { IndexService } from '../services/index.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  providers: [
    ROUTER_PROVIDERS,
    IndexService
  ]
})

@RouteConfig([
  {
    path: '/index',
    name: 'Index',
    component: IndexComponent,
    useAsDefault: true
  }
])

export class AppComponent {}