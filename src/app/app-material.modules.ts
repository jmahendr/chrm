import { NgModule } from '@angular/core';
import { 
    MatListModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatCheckboxModule,
    MatTableModule, 
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
    } from "@angular/material";

@NgModule({
    imports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule],
    
    exports: [MatListModule, 
        MatButtonModule, 
        MatToolbarModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule]
  })
  export class AppMaterialModule { }