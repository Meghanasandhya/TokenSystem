import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private http:HttpClient){
    this.http.get("https://localhost:4000/token").subscribe(()=>{
      console.log("Hello")
    })
  }
}
