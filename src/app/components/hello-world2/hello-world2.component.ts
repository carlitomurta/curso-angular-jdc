import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hello-world2',
  templateUrl: './hello-world2.component.html',
  styleUrls: ['./hello-world2.component.css']
})
export class HelloWorld2Component implements OnInit {
  @ViewChild('resultInput', { static: false }) resultInput: ElementRef;
  num1: number;
  num2: number;
  operacao: string = '+';
  constructor() {}

  ngOnInit() {}

  changeOperation(op) {
    this.operacao = op;
  }

  equal() {
    switch (this.operacao) {
      case '+':
        this.resultInput.nativeElement.value = this.num1 + this.num2;
        break;
      case '-':
        this.resultInput.nativeElement.value = this.num1 - this.num2;
        break;
      case '*':
        this.resultInput.nativeElement.value = this.num1 * this.num2;
        break;
      case '/':
        this.resultInput.nativeElement.value = this.num1 / this.num2;
        break;
    }
  }
}
