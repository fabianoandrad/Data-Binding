import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/g/400/200';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';
  valorDoContador: number = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyup(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(event: any) {
    this.valorSalvo = event;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    //console.log(this.isMouseOver)
  }

  onMudouValor(event: any){
    console.log(event.novoValor)
  }

  constructor() {}

  ngOnInit(): void {}
}
