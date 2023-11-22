import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormGroup, FormControl, FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Test progetto';
  NomeProgetto = 'NomeProgetto';
  FormSearch:FormGroup; 

  mobile =[
    {
      penna:'penna 1',
      parrucca:'parrucca 1',
      patente:'patente 1'
    },
    {
      penna:'penna 2',
      parrucca:'parrucca 2',
      patente:'patente2'
    },
    {
      penna:'penna 3',
      parrucca:'parrucca 3',
      patente:'patente 3'
    },
    {
      penna:'penna 4',
      parrucca:'parrucca 4',
      patente:'patente 4'
    },
    {
      penna:'penna 5',
      parrucca:'parrucca 5',
      patente:'patente 5'
    }
  ]

  constructor(private fb : FormBuilder){
    this.FormSearch =this.fb.group({
      nome : new FormControl (''),
      cognome : new FormControl (''),
      altezza : new FormControl (''),
      password : new FormControl ('')
    })

    /*
    for(let i =0; i <= this.mobile.length-1; i++){
      console.log(this.mobile[i]);
    }
     */

    this.mobile.forEach(c => {
      console.log(c)
    })
  } 

  ngOnInit(): void {
    
  }

  salvaDati(){

    console.log(this.FormSearch.value);
    alert('nome: ' +this.FormSearch.value.nome + '\n cognome: ' +this.FormSearch.value.cognome);
  }
}
