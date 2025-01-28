import { Component, OnInit } from '@angular/core';
import { CasellaPostaComponent } from '../casella-posta/casella-posta.component';

@Component({
  selector: 'app-cassettiera',
  imports: [CasellaPostaComponent],
  templateUrl: './cassettiera.component.html',
  styleUrl: './cassettiera.component.css'
})
export class CassettieraComponent implements OnInit{
  nomi: string[] = ["pino", "mino", "rino", "gino"]
  constructor(){

  }
 ngOnInit(): void {
   
 }
}
