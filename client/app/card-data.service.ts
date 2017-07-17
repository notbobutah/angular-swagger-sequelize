import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Card } from './card';
import 'rxjs/add/operator/map';

@Injectable()
export class CardDataService {
 constructor(private http: Http) { }

  // GET /cards
    getAllCards() {
        return this.http.get('http://localhost:5000/api/card/list')
                      .map((response: Response) => response.json());

      }
};
