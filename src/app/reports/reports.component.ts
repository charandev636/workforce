import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {

  reportsList = ['1','1','1','1','1','1','1','1','1','1'];
  constructor(private nav: NavController,private router: Router) { }

  ngOnInit() {}

  goToHome(){
    this.nav.navigateRoot(['home']);
  }
  bookOrder() {
    this.router.navigate(['bookorder']);
  }
}
