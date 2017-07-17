import {Card} from './card';

describe('Card', () => {
  it('should create an instance', () => {
    expect(new Card()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
      let todo = new Todo({
        name: 'Ace',
        complete: true
      });
      expect(todo.name).toEqual('Ace');
      expect(todo.complete).toEqual(true);
    });
  });
});
