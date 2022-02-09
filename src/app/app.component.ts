import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  constructor(private router: Router) {
    this.checkLogs();
  }


  checkLogs(){
    if (localStorage.getItem('introduction') === 'true') {
      this.router.navigate(['Login']);
     // this.router.navigate(['Intro-sliders']);
      console.log('test1');
    } else {
      this.router.navigate(['Intro-sliders']);
       console.log('test2');
    }
  }
}
