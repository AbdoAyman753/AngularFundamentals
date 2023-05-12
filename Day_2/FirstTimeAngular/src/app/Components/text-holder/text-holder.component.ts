import { Component } from '@angular/core';

@Component({
  selector: 'app-text-holder',
  templateUrl: './text-holder.component.html',
  styleUrls: ['./text-holder.component.scss']
})
export class TextHolderComponent {
  text = "";
  reset(){
    this.text = "";
  }
}
