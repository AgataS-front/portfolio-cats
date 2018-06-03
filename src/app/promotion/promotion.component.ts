import { Component, OnInit, Input } from '@angular/core';
import { PromotionItem } from './../model/promotion-item';
import { PromotionService } from './../services/promotion.service';

@Component({
  selector: 'promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

 promoList: Array<PromotionItem> = [];

 constructor(private promoServ: PromotionService) { 
    this.promoServ.getPromoItemsObs()
      .subscribe((promos: Array<PromotionItem>) => { 
        this.promoList = promos;
      });
  }



  ngOnInit() {

  }

}