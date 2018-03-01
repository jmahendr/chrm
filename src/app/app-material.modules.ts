import { NgModule } from '@angular/core';
import { 
    MatListModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatCheckboxModule,
    MatTableModule, 
    MatPaginatorModule
    } from "@angular/material";

@NgModule({
    imports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule],
    exports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule]
  })
  export class AppMaterialModule { }