import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errDirectMsg]'
})
export class ErrMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  private _msg: string = '';
  private _nameClass: string = '';

  @Input() set msg( message: string ) {
    this._msg = message;
    this.setMsg();
  }

  @Input() set addClass( nameClass: string ) {
    this._nameClass = nameClass;
    this.setStyle();
  }

  constructor( private elem: ElementRef<HTMLElement> ) {
    this.htmlElement = elem;
  }

  ngOnInit(): void {
    this.setMsg();
  }

  setMsg() {
    this.htmlElement.nativeElement.innerText = this._msg;
  }

  setStyle() {
    this.htmlElement.nativeElement.classList.add(this._nameClass);
  }

}
