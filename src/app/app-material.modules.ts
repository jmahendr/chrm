import { NgModule } from '@angular/core';
import { 
    MatListModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatCheckboxModule 
    } from "@angular/material";

@NgModule({
    imports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule],
    exports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule]
  })
  export class AppMaterialModule { }