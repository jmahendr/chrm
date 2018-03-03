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

  queryParams = {};

  searchForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private offerservice: OfferService,
    private fb: FormBuilder) { 
      this.createSearchForm();
    }

  ngOnInit() {
    this.queryOffers();
  }

  private  queryOffers() {
    console.debug("queryOffers fired....");
    this.offerservice.getOffers()
    .subscribe(data => {
        this.offers = data;
        this.dataSource = new MatTableDataSource<Offer>(this.offers);
        this.dataSource.paginator = this.paginator;},
      errorMsg => { this.offerError = <any>errorMsg; });
  };

  private searchOffers(query: Object) {
    console.debug("searchOffers fired....");
    this.offerservice.findOffers(query)
    .subscribe(data => {
      this.offers = data;
      this.dataSource = new MatTableDataSource<Offer>(this.offers);
      this.dataSource.paginator = this.paginator;},
    errorMsg => { this.offerError = <any>errorMsg; });
  }
  
  query() {
    console.debug("query fired....");
    this.offers = null;
    this.dataSource = new MatTableDataSource<Offer>();
    this.queryOffers();
  }

  /**
   * Search Form Related Code
   */
  createSearchForm() {
    this.searchForm = this.fb.group({
      name:'',
      code: ''
    });
  }

  onSubmit(){
    this.queryParams = this.searchForm.value;

    let q ={};
    for(var key in this.queryParams)
    {
      // check whether the key exists in the obj
      if (this.queryParams.hasOwnProperty(key))
      {
        // use key and its value
        let newkey = key+"_like";

        //only add non null query params to new Query Object.
        if(this.queryParams[key])
          q[newkey] = this.queryParams[key];
      }
    }
    console.debug("The query string is " + JSON.stringify(q));

    this.offers = null;
    this.dataSource = new MatTableDataSource<Offer>();
    this.searchOffers(q);
  }

}
