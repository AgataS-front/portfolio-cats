import { Injectable } from '@angular/core';
import { Cat } from './../model/cat';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


@Injectable()
export class CatService {

  catList: Array<Cat>;
  catListObs = new BehaviorSubject<Array<Cat>>([]);

  constructor() {

    this.catList = [
      { 
        name: "Ragdoll", ageMin: 15, ageMax: 18, furLength: "długa", avgWeight: 7, character: ["cichy", "spokojny", "oddany"], energy: "spokojny", 
      },
      { 
        name: "perski, Pers", ageMin: 14, ageMax: 18, furLength: "półdługa",  avgWeight: 5, character: ["spokojny", "łagodny"], energy: "spokojny",
      },
      { 
        name: "syjamski", ageMin: 15, ageMax: 20, furLength: "krótka", avgWeight: 3.5, character: ["towarzyski", "zabawowy", "inteligentny","bywa dominujący"], energy: "bardzo aktywny",
      }, 
      { 
        name: "sfinks", ageMin: 14, ageMax: 14, furLength: "bardzo krótka", avgWeight: 4.5, character: ["przyjacielski", "towarzyski"], energy: "hiperaktywny", priceMin: 1500, priceMax: 3000
      },
      { 
        name: "Norweski leśny", ageMin: 14, ageMax: 16, furLength: "bardzo krótka", avgWeight: 6, character: ["łagodny, przyjacielski"], energy: "aktywny"
      },

    ];

    this.catListObs.next(this.catList);
  }


  getCatListObs(): Observable<Array<Cat>> {
    return this.catListObs.asObservable();

  }


  

}