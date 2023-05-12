import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {
  @Input('appBgColor') colorObj:any;

  constructor(public myRef:ElementRef) {
    // console.log(myRef.nativeElement);
    // myRef.nativeElement.style.color = "red";
    // myRef.nativeElement.style.background = "yellow";
    // myRef.nativeElement.style.textAlign = "center";
   }

   @HostListener('click') click(){
    // this.myRef.nativeElement.style.color = "blue";
    this.myRef.nativeElement.style.color = this.colorObj.textColor;
    this.myRef.nativeElement.style.backgroundColor = this.colorObj.bgColor;
    this.myRef.nativeElement.style.background = this.colorObj.bgColor;
    // this.myRef.nativeElement.style.textAlign = this.colorObj.tA;
    // this.myRef.nativeElement.style.backgroundColor = "green";
    // this.myRef.nativeElement.style.textAlign = "right";
   }
}
