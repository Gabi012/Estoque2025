import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogService } from 'primeng/dynamicdialog';
import { ToolbarNavegationComponent } from './components/toolbar-navegation/toolbar-navegation.component';



@NgModule({
  declarations: [
    ToolbarNavegationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToolbarModule,
    ButtonModule,
    CardModule
  ],
  exports:[ToolbarNavegationComponent],
  providers:[DialogService, CurrencyPipe]

})
export class SharedModule { }
