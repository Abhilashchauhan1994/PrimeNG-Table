import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../inteface/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/showcase/data/car-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsMedium() {
    return this.http.get<any>('assets/showcase/data/car-medium.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsLarge() {
    return this.http.get<any>('assets/showcase/data/car-large.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

  getCarsHuge() {
    return this.http.get<any>('assets/showcase/data/car-huge.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
  }
}
