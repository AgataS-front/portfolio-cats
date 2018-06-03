import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anatomy',
  templateUrl: './anatomy.component.html',
  styleUrls: ['./anatomy.component.css']
})
export class AnatomyComponent implements OnInit {
  pageTitle = "Budowa kota";
  

  anatomyList = [
  {
    "title": "Widzę w ciemności",
    "content": "Nie jest prawdą, ze kot ma wzrok absolutny. Przy całkowitej ciemności, nawet on nie widzi. Jednak wystarczy nawet niewielkie źródło światła, a kot jest w stanie dostrzec szczegóły niewidoczne dla ludzkiego oka. Odpowiadają za to pręciki umożliwiające percepować więcej światła w ciemnościach. Kot nie widzi jednak kolorów (a przynajmniej nie w takim stopniu jak człowiek)."
  },
  {
    "title": "Skaczę w zwyż bez tyczki",
    "content": "Bez rozbiegu kot jest w stanie wykonać skok wzwyż równy swojej pięciokrotnej wysokości, a w dal sześciokrotnej długości ciała. Zawdzięcza to specjalnej budowie kręgosłupa i szczególnej giętkości szyi."
  },
  {
    "title": "Słyszę ciszę",
    "content": "W skrócie można powiedzieć, że słuch kota jest tak doskonały, jak węch psa. Kot potrafi usłyszeć mysz nawet z odległości kilkudziesięciu metrów. Kot doskonale słyszy również dźwięki, których ucho człowieka w ogóle nie wychwytuje z otoczenia. Ważną cechą ucha kota, jest umiejętność precyzyjnego określania źródła dźwięku. Co jeszcze ciekawsze kot, potrafi selektywnie wyławiać dźwięki, co pozwala mu np. ustalić miejsce w którym znajduje się jego ofiara, nawet jeśli w pobliżu znajduje się inne źródło dźwięku. Na uwagę zasługuje również budowa samego ucha, które potrafi poruszać się w wielu kierunkach – uchem kota precyzyjnie „steruje” aż 30 różnych mięśni. Uszy kota poruszają się niezależnie, może więc nastawiać swoje „radarki”, każdy w inną stronę."
  }

  ];


  activeIndex: number;

  toggleClass(event, i: number): void {
    event.preventDefault();
    console.log(event)
    this.activeIndex = i;

    console.log(this.activeIndex);
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}