// main service in charge of fetching location data

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interfaces
import { User } from './user.data';
import { Pin } from './pin';

@Injectable({
  providedIn: 'root'
})
export class LocatorService {

  headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  title: string = 'locator-service'

  // AbstractAPI data
  api_key = '3c0b50f3d8114cc986f1cb83cdfad9ae';
  url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;

  ipAddress = '';
  city = '';
  region = '';
  country = '';
  postal_code = '';
  latitude = 0;
  longitude = 0;

  constructor(private http: HttpClient) { }

// error in console:
// Content Security Policy: The page’s settings blocked the loading of a resource at https://ipgeolocation.abstractapi.com/v1/?api_key=3c0b50f3d8114cc986f1cb83cdfad9ae (“default-src”).

  updateLocation() {
    this.http.get(this.url, { 'headers': this.headers }).subscribe((res:any) => {
      this.ipAddress = res.data.ip_address;
      this.city = res.data.city;
      this.region = res.data.region;
      this.country = res.data.country;
      this.postal_code = res.data.postal_code;
      this.latitude = res.data.latitude;
      this.longitude = res.data.longitude;

      console.log(this.city);
    });
  }

  getZipCode() {
    this.updateLocation();
    return this.postal_code;
  }




}
