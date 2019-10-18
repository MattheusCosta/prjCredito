import { Component, OnInit } from '@angular/core';
import { CalculaCreditoService } from '../../services/calcula-credito.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {

  constructor(private credito: CalculaCreditoService) { }
  private _saldo:number;
  private _valor1:number;
  private _valor10:number;
  private _valor100:number;

  ngOnInit() {
    this._saldo = 10;
  }

  descontar(){
    this._saldo--;
  }

  deposito(valorDeposito:number){
    this._saldo = this.credito.depositar(this._saldo, valorDeposito);
  }

  saque(valorSaque:number){
    this._saldo = this.credito.sacar(this._saldo, valorSaque);
  }

  get exibirSaldo(){
    return this._saldo;
  }

}
