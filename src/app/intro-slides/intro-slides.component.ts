import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro-slides',
  templateUrl: './intro-slides.component.html',
  styleUrls: ['./intro-slides.component.scss'],
})
export class IntroSlidesComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  count = 0;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  constructor(public router: Router) {}

  ngOnInit() {}


  getIndex() {
    this.slides.getActiveIndex().then(index =>{
      this.count = index;
    });
  }

  skipButton(){
    localStorage.setItem('introduction', 'true');
    this.router.navigate(['Login']);
  }

 async nextButton(){
    this.slides.slideNext();
    await this.slides.getActiveIndex();
    this.count++;
    if(this.count === 3) {
      localStorage.setItem('introduction', 'true');
      this.router.navigate(['Login']);
    }
  }

 async finish() {
  localStorage.setItem('introduction', 'true');
  this.router.navigate(['Login']);
 }
}
