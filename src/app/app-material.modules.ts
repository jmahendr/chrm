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
    MatInputModule,
    MatSelectModule
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
        MatInputModule,
        MatSelectModule],
    
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
        MatInputModule,
        MatSelectModule]
  })
  export class AppMaterialModule { }