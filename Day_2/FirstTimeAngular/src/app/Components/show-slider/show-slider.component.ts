import { Component } from '@angular/core';

@Component({
  selector: 'app-show-slider',
  templateUrl: './show-slider.component.html',
  styleUrls: ['./show-slider.component.scss']
})
export class ShowSliderComponent {
  imgSrc="assets/images/img1.jpg";
  imgCounter = 1;
  interval = setInterval(()=>{},0);
  prev(){
    if(this.imgCounter > 1){
      this.imgCounter--;
      this.imgSrc = "assets/images/img"+ this.imgCounter +".jpg";
    }
  }
  next(){
    if(this.imgCounter < 5){
      this.imgCounter++;
      this.imgSrc = "assets/images/img"+ this.imgCounter +".jpg";
    }
  }
  play(){
    // console.log("play");
    this.interval = setInterval(this.slideShow,1000,this);
  }
  stop(){
    // console.log("stop");
    clearInterval(this.interval);
  }
  slideShow(obj:any){
    // console.log("slide");
    obj.imgCounter += 1;
    // console.log("after incrment "+obj.imgCounter);
    if(obj.imgCounter > 5){
      obj.imgCounter = 1;
      // console.log("after reset"+obj.imgCounter);
    }
    obj.imgSrc = "assets/images/img"+ obj.imgCounter +".jpg";
    // console.log(this.imgSrc);
  }
}
