import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class serviceProhService {

  private serviceUrl: string;

  constructor(public http: HttpClient, @Inject('SERVICE_URL') serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  //#region "STORE"

  //#region "STORE"

}
