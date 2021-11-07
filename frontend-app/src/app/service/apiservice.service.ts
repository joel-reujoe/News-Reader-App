import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  url = 'https://domaini.herokuapp.com/';
  constructor(private http: HttpClient) { }


  getNewsList(id) {
    const response =  this.http.get(`${this.url}newsGenerator/?category=${id}`);
    return response
  }
}
