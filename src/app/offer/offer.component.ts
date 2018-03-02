import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { OfferService } from "../services/offer.service";
import { Offer } from "../shared/offer";
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offers: Offer[];
  offerError: string =  undefined;
  displayedColumns = ['id', 'type', 'name', 'description', 'code', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<Offer>(this.offers);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private offerservice: OfferService) { }
  ngOnInit() {
    this.queryOffers();
  }

  private  queryOffers() {
    this.offerservice.getOffers()
    .subscribe(data => {
        this.offers = data;
        this.dataSource = new MatTableDataSource<Offer>(this.offers);
        this.dataSource.paginator = this.paginator;},
      errorMsg => { this.offerError = <any>errorMsg; });
  };

  private searchOffers() {
    let query = {name_like:'Summer'}
    this.offerservice.findOffers(query)
    .subscribe(data => {
      this.offers = data;
      this.dataSource = new MatTableDataSource<Offer>(this.offers);
      this.dataSource.paginator = this.paginator;},
    errorMsg => { this.offerError = <any>errorMsg; });
  }
  

  search() {
    this.offers = null;
    this.dataSource = new MatTableDataSource<Offer>();
    this.searchOffers();
    console.log("search clicked");
  }

  query() {
    this.offers = null;
    this.dataSource = new MatTableDataSource<Offer>();
    this.queryOffers();
  }

}
