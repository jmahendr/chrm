import { Injectable } from '@angular/core';

import { Offer } from "../shared/offer";
import { Observable } from "rxjs/Observable";
import { Restangular, RestangularModule } from "ngx-restangular";

@Injectable()
export class OfferService {

  constructor(private restangular: Restangular) { }

  getOffers() : Observable<Offer[]> {
    return this.restangular.all('offers').getList();
  }
}
