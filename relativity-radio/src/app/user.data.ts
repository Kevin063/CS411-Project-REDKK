// Interface representing all backend user data.

// make required import statements for Settings and Pin interfaces here.

import { Pin } from './pin';

export interface User {
  id: number;
  settings: string; // todo: replace with Settings interface
  pins: Pin[] // todo: troubleshoot
}


// test "people":
export var testyMcTestFace = {
  id: 69,
  settings: "",
  pins: [],
}
