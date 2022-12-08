import { Component, OnInit } from '@angular/core'; // "lifecycle hook"
import { HttpClient, HttpHeaders } from '@angular/common/http'; // for API

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {} // also for API

  title = 'relativity-radio';

  ngOnInit() {

  /*
   * this is SUPPOSED to be an API call. idk what it actually is.
   *
    let headers = new HttpHeaders('', {
      'x-rapidapi-host': '',
      'x-rapidapi-key': '',
    });

    this.http.get<any>({}).subscribe(data => {
      console.log(data);
    })
  */

  }
}
