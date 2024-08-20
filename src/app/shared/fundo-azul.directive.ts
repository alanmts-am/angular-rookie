import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveFundoAzul]'
})
export class FundoAzulDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
    this.color = 'black'
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'blue';
    this.color = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor = 'blue'
  @HostBinding('style.color') color = 'white'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // console.log(elementRef)

    // FORMA MAIS VUNERÁVEL !!!
    // elementRef.nativeElement.style.backgroundColor = 'blue'
    // elementRef.nativeElement.style.color = 'white'

    // USANDO RENDERER
    // renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue'
    // )
    // renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')
  }

}
