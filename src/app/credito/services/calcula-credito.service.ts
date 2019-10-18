import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculaCreditoService {

  constructor() { }

  depositar(valorSaldo: number, valorDeposito: number):number{
    return valorSaldo+=valorDeposito;
  }
  sacar(valorSaldo: number, valorSaque: number):number{
    return valorSaldo-=valorSaque;
  }
}
