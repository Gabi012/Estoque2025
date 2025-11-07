import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductEvent } from 'src/app/models/enums/products/productEvent';
import { ProductFormComponent } from 'src/app/modules/products/components/product-form/product-form.component';

@Component({
  selector: 'app-toolbar-navegation',
  templateUrl: './toolbar-navegation.component.html',
  styleUrls: ['./toolbar-navegation.component.scss']
})
export class ToolbarNavegationComponent {

 constructor(private cookieService: CookieService,
   private router: Router,
   private dialogService: DialogService
  ){}
  handleLogout(): void{
    this.cookieService.delete('USER_INFO');
    void this.router.navigate(['/home']);

  }

  handleSaleProduct(): void {
    const saleProductAction = ProductEvent.SALE_PRODUCT_EVENT;

    this.dialogService.open(ProductFormComponent, {
      header: saleProductAction,
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        event: { action: saleProductAction },
      },
    });
  }


}
