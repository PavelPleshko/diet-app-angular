import { Headers } from '@angular/http';

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const contentHeaders = new Headers(HEADERS);