import { InjectionToken } from '@angular/core';

export const IS_PROD = false;
export const CUSTOMERS_URL = 'https://jsonplaceholder.typicode.com/users';
export const BACKEND_URL = new InjectionToken<string>('API_URL');
