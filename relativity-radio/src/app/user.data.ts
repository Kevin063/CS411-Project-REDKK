// Interface representing all backend user data.

// make required import statements for Settings and Pin interfaces here.

export interface User {
  id: number;
  settings: string; // todo: replace with Settings interface
  pins: string // todo: replace with list of Pin interface
}


// test "people":
export var testyMcTestFace = {
  id: 69;
  settings: "";
  pins: "";
}
