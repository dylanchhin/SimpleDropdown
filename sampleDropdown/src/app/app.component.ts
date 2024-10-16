import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  standalone: true,  
  imports: [FormsModule, CommonModule],
})

export class AppComponent  {

  lobType = [
   { type: "1"},{ type: "2"}, { type: "3"}
  ];
  stateType = [
   { type: "A"},{ type: "B"}, { type: "C"}
  ];
 
  first_name: string= "";
  last_name: string= "";
  lobSelected: string = "";
  stateSelected: string = "";
  page: number = 0;
  totalAngularPackages: any;
  
  
  constructor(private http: HttpClient) {}

  ngOnInit() {    
  }
  onClick() {
    this.http.get<any>('https://reqres.in/api/users?page='+ this.lobSelected).subscribe({
      next: (data) => {
          console.log(data)
            if(data.data.length === 0)
              {
                this.first_name = "not found"
              }
            else
            {
                this.first_name = data.data[0].first_name
            } 
      },
      error: (error) => {
          console.log(error)
      },
      complete: () => {
          console.log('complete')
      }
    })  
    console.log('selection', this.lobSelected + ' - ' + this.stateSelected)
  }
}
