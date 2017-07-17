export class Card {
  id: number;
  name: string = '';
  color: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
