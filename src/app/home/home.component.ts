import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  pageTitle = "Cats & Bites";

  pictures = [
    "https://images.unsplash.com/photo-1503756755766-151cb0cd465f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08f6944494ab6719d970d7cbceb3daa7&auto=format&fit=crop&w=1000&q=60",

  'https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eacbf50fac29a13afba26ad7499cedee&auto=format&fit=crop&w=1000&q=60',
  
  'https://images.unsplash.com/photo-1496522650602-5988dce09660?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=124418c3f40f8216c7f62b7f1a2434c3&auto=format&fit=crop&w=1000&q=60',
  
  'https://images.unsplash.com/photo-1479065476818-424362c3a854?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=290c91744d9c81d3f7fb1f7a5bdc96ee&auto=format&fit=crop&w=1000&q=60',
  
  'https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ceb456f85123541a2b7acbd1d62103c9&auto=format&fit=crop&w=1000&q=60',
  
  'https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f88858281e7f14f3306675d31b1f0645&auto=format&fit=crop&w=1000&q=60'
  ];

  

  constructor() { 
  }


  dots = new Array(this.pictures.length);
  

  currentPicture:number = 0;
  gallerySize = this.pictures.length;
  activeIndex = this.currentPicture;


  ngOnInit() {

  setInterval(() => {
    this.currentPicture = this.currentPicture+1;
    this.activeIndex = this.currentPicture; 
    if(this.currentPicture > this.gallerySize-1){
      this.currentPicture = 0;
      this.activeIndex = 0;
    }
  }, 3000);
}
  
  findDot(event, i:number){
    this.currentPicture = i;
    event.preventDefault();
    console.log(event)
    this.activeIndex = i;
  }
  
  

  

}