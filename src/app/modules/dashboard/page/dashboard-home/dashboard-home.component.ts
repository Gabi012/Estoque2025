import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { GetAllProductsResponse } from 'src/app/models/products/response/GetAllProductsResponse';
import { ProductsDataTransferService } from 'src/app/services/products/products-data-transfer.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit{

  public productsList: Array<GetAllProductsResponse> = [];

  constructor(private productService:  ProductsService,
    private messageService: MessageService,
    private productsDtService: ProductsDataTransferService
  ){}

  ngOnInit():void{
    this.getProductsDatas();
  }

getProductsDatas(): void{
    this.productService.getAllProducts().subscribe({
      next: (response) => {
if(response.length > 0){
          this.productsList = response
          this.productsDtService.setProductsDatas(this.productsList);
        }
      },
      error: (err) => {
        this.messageService.add({
                  severity: 'error',
                  summary:'Erro',
                  detail:`Erro ao carregar!`,
                  life: 2000
                })
        console.log(err)
      }
    })
}

}
