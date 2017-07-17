import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CardDataService } from '../card-data.service';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  providers: [CardDataService],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

message: any;
cards = [];

  constructor(private service: CardDataService) {  }

  ngOnInit() {
  this.service.getAllCards().subscribe(resCardsData => this.cards = resCardsData);
  }

}
