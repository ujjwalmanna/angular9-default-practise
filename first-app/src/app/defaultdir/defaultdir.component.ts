import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultdir',
  templateUrl: './defaultdir.component.html',
  styleUrls: ['./defaultdir.component.css']
})
export class DefaultdirComponent implements OnInit {
  
  oddNumbers:number[]= [1,3,5,7]
  evenNumbers:number[]= [2,4,6]
  onlyOdd=false

  constructor() { }

  ngOnInit(): void {
  }

}
