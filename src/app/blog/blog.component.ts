import { Component, OnInit, Input } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { PromotionService } from './../services/promotion.service';
import { PromotionComponent } from './../promotion/promotion.component';
import { PromotionItem } from './../model/promotion-item';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public currentPage: number = 1;
  promosOnPage = 3;

  pageTitle = "Witaj na kocim blogu";


  promosList: Array<PromotionItem> = [];

  constructor( promoSer: PromotionService ) { 
    
   };

  ngOnInit() {
  }

}