import { NgModule } from '@angular/core';
import { 
    MatListModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatCheckboxModule,
    MatTableModule, 
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule
    } from "@angular/material";

@NgModule({
    imports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatExpansionModule],

    exports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatExpansionModule]
  })
  export class AppMaterialModule { }