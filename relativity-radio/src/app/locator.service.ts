// main service in charge of fetching location data

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interfaces
import User from './user.data.ts';
import Pin from './pin.ts';

@Injectable({
  providedIn: 'root'
})

export class LocatorService {

  //data


  constructor(
    private http: HttpClient
  ) { }

  updateLocation() {}
}
