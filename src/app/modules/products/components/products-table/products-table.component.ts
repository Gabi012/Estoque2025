import { ProductEvent } from './../../../../models/enums/products/productEvent';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { deleteProductAction } from 'src/app/models/enums/products/deleteProductAction';
import { EventAction } from 'src/app/models/products/event/eventAction';
import { GetAllProductsResponse } from 'src/app/models/products/response/GetAllProductsResponse';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  @Input() products: Array<GetAllProductsResponse> = [];
  @Output() productEvent = new EventEmitter<EventAction>();
  @Output() deleteProductEvent = new EventEmitter<deleteProductAction>();
  public productSelected! : GetAllProductsResponse;

  public addProductEvent = ProductEvent.ADD_PRODUCT_EVENT;
  public editProductEvent = ProductEvent.EDIT_PRODUCT_EVENT;


  handleProductEvent(action: string, id? : string): void{
    if(action && action !== ''){
      const productEventData = id && id !== '' ? { action , id} : {action}
      this.productEvent.emit(productEventData);
    }
  }

  handleDeleteProduct(product_id: string, productName: string){
    if (product_id !== '' && productName !== '') {
      this.deleteProductEvent.emit({
        product_id: product_id,
        productName: productName
      });
    }

  }
}
