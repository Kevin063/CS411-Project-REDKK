// main service interacting with Spotify listening activity and API

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interfaces
import User from './user.data.ts';
import Pin from './pin.ts';

@Injectable({
  providedIn: 'root'
})
export class SpotListenService {

  constructor() { }
}
