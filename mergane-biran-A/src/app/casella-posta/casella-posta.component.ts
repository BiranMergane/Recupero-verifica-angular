import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-casella-posta',
  imports: [],
  templateUrl: './casella-posta.component.html',
  styleUrl: './casella-posta.component.css'
})
export class CasellaPostaComponent implements OnInit {
@Input() persone: string = "";
constructor(){


}
ngOnInit(): void {
  
}
}
