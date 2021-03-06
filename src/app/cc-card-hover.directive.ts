import { Directive, 
         ElementRef, 
         Renderer2, 
         HostListener,
         HostBinding,
         Input } from '@angular/core';

@Directive({
  selector: '[appCcCardHover]'
})
export class CcCardHoverDirective {
  @Input('appCcCardHover') config:any = {
    querySelector: '.card-text'
  }
  @HostBinding('class.card-outline-success') private isHovering:boolean = false;
  constructor(private el:ElementRef, 
              private renderer: Renderer2) {
   }
  @HostListener('mouseover') onMouseOver(){
    let punchline = this.el.nativeElement.querySelector(this.config.querySelector);
    let punchlineBlock = this.el.nativeElement;
    let deletePunchLine = this.el.nativeElement.querySelector('.actions');
    this.renderer.setStyle(punchline,'display','block');
    this.renderer.setStyle(punchlineBlock,'backgroundColor','rgba(255, 235, 209,0.25)');
    this.renderer.setStyle(deletePunchLine,'display','none');
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseOut(){
    let punchline = this.el.nativeElement.querySelector(this.config.querySelector);
    let punchlineBlock = this.el.nativeElement;
    let deletePunchLine = this.el.nativeElement.querySelector('.actions');
    this.renderer.setStyle(punchline,'display','none');
    this.renderer.setStyle(punchlineBlock,'backgroundColor','#ffffff');
    this.renderer.setStyle(deletePunchLine,'display','block');
    this.isHovering = false;
  }
}
