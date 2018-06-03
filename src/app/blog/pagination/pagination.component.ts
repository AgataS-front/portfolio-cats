import { Component, OnInit, Input } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Input() public currentPage: number;
  
  // to calculate, based on allPromos en promosOnPage
  pages: number[]; // = [1,2];

  // change if more promos
  promosOnPage: number = 3;

  allPromosNumber: number;


  constructor( promoSer: PromotionService) {
      this.allPromosNumber = promoSer.getPromosNumber();
      console.log(this.allPromosNumber);

      const pagesCount = Math.ceil(this.allPromosNumber / this.promosOnPage);
      this.pages = Array(pagesCount)
        .fill(0)
        .map((_, index) => index + 1);

      console.log(this.pages);
   }

  ngOnInit() {
  }

}