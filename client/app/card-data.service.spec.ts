/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardDataService } from './card-data.service';

describe('CardDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardDataService]
    });
  });

  it('should ...', inject([CardDataService], (service: CardDataService) => {
    expect(service).toBeTruthy();
  }));
});
describe('#getAllCards()', () => {

   it('should return an empty array by default', inject([CardDataService], (service: CardDataService) => {
     expect(service.getAllCards()).toEqual([]);
   }));

   it('should return all cards', inject([CardDataService], (service: CardDataService) => {
     let card1 = new Card({name: 'Hello 1', complete: false});
     let card2 = new Card({name: 'Hello 2', complete: true});
     service.addCard(card1);
     service.addCard(card2);
     expect(service.getAllCards()).toEqual([card1, card2]);
   }));

 });

 describe('#save(card)', () => {

   it('should automatically assign an incrementing id', inject([CardDataService], (service: CardDataService) => {
     let card1 = new Card({name: 'Hello 1', complete: false});
     let card2 = new Card({name: 'Hello 2', complete: true});
     service.addCard(card1);
     service.addCard(card2);
     expect(service.getCardById(1)).toEqual(card1);
     expect(service.getCardById(2)).toEqual(card2);
   }));

 });

 describe('#deleteCardById(id)', () => {

   it('should remove card with the corresponding id', inject([CardDataService], (service: CardDataService) => {
     let card1 = new Card({name: 'Hello 1', complete: false});
     let card2 = new Card({name: 'Hello 2', complete: true});
     service.addCard(card1);
     service.addCard(card2);
     expect(service.getAllCards()).toEqual([card1, card2]);
     service.deleteCardById(1);
     expect(service.getAllCards()).toEqual([card2]);
     service.deleteCardById(2);
     expect(service.getAllCards()).toEqual([]);
   }));

   it('should not removing anything if card with corresponding id is not found', inject([CardDataService], (service: CardDataService) => {
     let card1 = new Card({name: 'Hello 1', complete: false});
     let card2 = new Card({name: 'Hello 2', complete: true});
     service.addCard(card1);
     service.addCard(card2);
     expect(service.getAllCards()).toEqual([card1, card2]);
     service.deleteCardById(3);
     expect(service.getAllCards()).toEqual([card1, card2]);
   }));

 });

 describe('#updateCardById(id, values)', () => {

   it('should return card with the corresponding id and updated data', inject([CardDataService], (service: CardDataService) => {
     let card = new Card({name: 'Hello 1', complete: false});
     service.addCard(card);
     let updatedCard = service.updateCardById(1, {
       name: 'new name'
     });
     expect(updatedCard.name).toEqual('new name');
   }));

   it('should return null if card is not found', inject([CardDataService], (service: CardDataService) => {
     let card = new Card({name: 'Hello 1', complete: false});
     service.addCard(card);
     let updatedCard = service.updateCardById(2, {
       name: 'new name'
     });
     expect(updatedCard).toEqual(null);
   }));

 });

 describe('#toggleCardComplete(card)', () => {

   it('should return the updated card with inverse complete status', inject([CardDataService], (service: CardDataService) => {
     let card = new Card({name: 'Hello 1', complete: false});
     service.addCard(card);
     let updatedCard = service.toggleCardComplete(card);
     expect(updatedCard.complete).toEqual(true);
     service.toggleCardComplete(card);
     expect(updatedCard.complete).toEqual(false);
   }));

 });

});
