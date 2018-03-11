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

  findOffers(query:Object) {
    return this.restangular.all('offers').getList(query);
  }

  getQualTypes() {
    return this.restangular.all('lookups').getList()
    .map(lookups => lookups[0]);
  }

  postOffer(data) {
    return this.restangular.all('offers').post(data);
  }
}
