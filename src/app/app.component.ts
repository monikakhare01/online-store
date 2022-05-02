import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Online Store</h1>
       <hr />
      </div>
    </div>
   <!-- <app-products></app-products> -->
    <router-outlet></router-outlet>
  </div>
     
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
cart: any[] =[];

//cart: Observable<Array<any>> 
  constructor(private store: Store<any>) {}

  

  ngOnInit() {
    this.store.select('cart').subscribe((State => this.cart = State))  }
}
