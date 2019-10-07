import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoComponent } from './components/credito/credito.component';
import { CalculaCreditoService } from './services/calcula-credito.service';



@NgModule({
  declarations: [CreditoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CreditoComponent
  ],
  providers: [
    CalculaCreditoService
  ]
})
export class CreditoModule { }
