import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {

  menuOptions : any;
  constructor(private router: Router,
    public menuCtrl: MenuController,) {
    this.checkLogs();

    this.menuOptions = [
      {
          title: "Home",
          url: "home",
         // imgs: "assets/svg/home-dark.svg",
      },
      {
          title: "Settings",
          url: "home",
          // imgs: "assets/svg/expenses.svg",
      },
      {
          title: "Profile",
          url: "signup",
          //imgs: "assets/svg/reports.svg",
      }
  ];
    
  }

  checkLogs(){
    if (localStorage.getItem('introduction') === 'true') {
      this.router.navigate(['home']);
     // this.router.navigate(['Intro-sliders']);
      console.log('test1');
    } else {
      this.router.navigate(['Intro-sliders']);
       console.log('test2');
    }
  }
  
  menutoggle() {
    this.menuCtrl.enable(true, 'mainMenu');
    this.menuCtrl.enable(false, 'subMenu');
}

}
