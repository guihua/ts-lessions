namespace Tools {
  const TIMEOUT = 100;

  export class Ftp {
    constructor() {
      setTimeout(() => {
        console.log('Ftp');
      }, TIMEOUT);
    }
  }

  export class Http {
    constructor() {
      console.log('Http');
    }
  }

  export function parseURL() {
    console.log('parseURL');
  }
}
