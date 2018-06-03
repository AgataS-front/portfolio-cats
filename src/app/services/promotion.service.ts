import { Injectable, Input } from '@angular/core';
import { PromotionItem } from './../model/promotion-item';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Injectable()
export class PromotionService {

  promoItems: Array<PromotionItem>;
  promoItemsObs = new BehaviorSubject<Array<PromotionItem>>([]);
  promosNumber: number;

  constructor() {

    this.promoItems = [
      {
      title: "Umiem pokazać, że cię kocham!",
      subtitle: "Ponoć jestem niewdzięcznym stworzeniem. A może to ty nie umiesz patrzeć?",
      url: "#",
      img: "https://images.unsplash.com/photo-1496284427489-f59461d8a8e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ceb456f85123541a2b7acbd1d62103c9&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["Zachowanie"],
      date: "30-05-2017"
      },
      {
      title: "Jestem tutaj",
      subtitle: "Lubię zaznaczać swoją obecność. W końcu jestem panem twojego domu.",
      url: "#",
      img: "https://images.unsplash.com/photo-1517330156738-0b67722f3751?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ae2ea69b4d585ebbb32925a8e619d633&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["Rasy", "Zachowanie"],
      date: "30-05-2017"
      },
      {
      title: "Pobaw się ze mną!",
      subtitle: "No naprawdę, tobie też przyda się trochę ruchu i nie musisz mnie wyprowadzać, kiedy pada.",
      url: "#",
      img: "https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43cb78de7049ab49aaa8b6ce363b8986&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["Zachowanie"],
      date: "30-05-2017"
      },
      {
      title: "Kici, kici!",
      subtitle: "Wołaj jak chcesz, przyjdę jak mi się spodoba",
      url: "#",
      img: "https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=85f3d3ca03eab737cc448726428d19d0&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["Zachowanie"],
      date: "30-05-2017"
      },
      {
      title: "Sam się myję!",
      subtitle: "Ty używaj szamponu, ja jestem czysty",
      url: "#",
      img: "https://images.unsplash.com/photo-1470331559656-0d1c11b4ca63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=482ba9e7fd6bfe57df012a1d3f534c62&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["Pielęgnacja", "Zachowanie"],
      date: "30-05-2017"
      },
      {
      title: "Wooooda! A co to takiego?",
      subtitle: "Różnca między miską a umywalką",
      url: "#",
      img: "https://images.unsplash.com/photo-1505503076934-b9b847ee95ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69ef6018f093728a7b2952c8f0773831&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["zachowanie", "żywnienie"],
      date: "30-05-2017"
      },
      {
      title: "Hej, hej, coś mi dolega!",
      subtitle: "Nie jestem złośliwy, ja tylko pokazuję, że jestem chory!",
      url: "#",
      img: "https://images.unsplash.com/5/nose-up.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f8f7b2f5855e431b1f58d5545aae45e&auto=format&fit=crop&w=700&h=350&q=80",
      category: ["zachowanie", "zdrowie"],
      date: "30-05-2017"
      }
    ];

    this.promoItemsObs.next(this.promoItems);

    this.promosNumber = this.promoItems.length;
  }

    
  

  getPromosNumber(){
    return this.promosNumber;
  }


  getPromoItemsObs(): Observable<Array<PromotionItem>> {
    return this.promoItemsObs.asObservable();

  }

}
