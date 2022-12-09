// main service interacting with backend ("pushing Pins")

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interfaces
import User from './user.data.ts';
import Pin from './pin.ts';

@Injectable({
  providedIn: 'root'
})
export class PinPusherService {

  constructor() { }
}
