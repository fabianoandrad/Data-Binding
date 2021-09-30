import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso: string = ''; // Expoe a property "nome" para o selector: 'app-curso' e com isso seu valor pode ser alterada por outro valor desta propriedade do component

  constructor() { }

  ngOnInit(): void {
  }

}
