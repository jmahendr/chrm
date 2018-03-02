import { NgModule } from '@angular/core';
import { 
    MatListModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatCheckboxModule,
    MatTableModule, 
    MatPaginatorModule,
    MatProgressSpinnerModule
    } from "@angular/material";

@NgModule({
    imports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule],
    exports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule]
  })
  export class AppMaterialModule { }