import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextInputColor]'
})
export class TextInputColorDirective {

  constructor() { }
  possibleColors = [
    'darksalmon', 'hotpink', 'darkskyblue', 'gold', 'black',
    'green', 'blue', 'almond', 'darkgrey'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.color = this.borderColor = this.possibleColors[colorPick];
  }

}
