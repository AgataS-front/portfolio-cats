import { Component, OnInit } from '@angular/core';
import { Cat } from './../model/cat';
import { CatService } from './../services/cat.service';

@Component({
  selector: 'app-rasy',
  templateUrl: './rasy.component.html',
  styleUrls: ['./rasy.component.css']
})
export class RasyComponent implements OnInit {

  pageTitle = "Rasy";
  
  catList: Array<Cat> = [];


  constructor(private catServ: CatService) { 
    this.catServ.getCatListObs()
      .subscribe((cats: Array<Cat>) => { 
        this.catList = cats;
      });
  }

  furOptions = [
    {id: 1, name: 'długa'},
    {id: 2, name: 'półdługa'},
    {id: 3, name: 'średnia'},
    {id: 4, name: 'krótka'},
    {id: 5, name: 'bardzo krótka'},
  ]

checkAge(min,max){
   if(min !== max){
     return true;
   }
 } 

  ngOnInit() {
  }

}