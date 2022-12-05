import { Component, OnInit } from '@angular/core'; // OnInit lifecycle hook
import {HttpClient, HttpHeaders} from '@angular/common/http'; //API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {} // also for API

  title = 'relativity-radio';

  ngOnInit() {
    // API Call!   TODO: make it actually work!


    let headers = new HttpHeaders('', {
      'x-rapidapi-host': '',
      'x-rapidapi-key': '',
    });

    this.http.get<any>({

    }).subscribe(data => {
      console.log(data);
    })


  }
}
