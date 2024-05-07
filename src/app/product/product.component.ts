import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../models/product.interface';
import { ProductState } from '../corePractice/store/product/product.selector';
import * as ProductActions from '../corePractice/store/product/product.action';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  products$ = this.store.select(ProductState);
  displayedColumns: string[] = ['id', 'name', 'price','delete']; // Define displayedColumns property
  constructor(
    private store: Store<{products:ReadonlyArray<Product>}>
  ) {}
  AddProduct(){
    const rnd = Date.now().toString();
    const product:Product = {
      id:rnd,
      name:`Product ${rnd}`,
      price: Math.floor(Math.random()*100)
    };
    this.store.dispatch(ProductActions.productAdd({product}));
  }
  deleteProduct(id:string){

    this.store.dispatch(ProductActions.delProduct({id}));
  }
  deleteAllProducts(){
    this.store.dispatch(ProductActions.delAllProduct());

  }

}
