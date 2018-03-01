import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http'; //in webservice case

import {HttpClientModule, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'
@Injectable()
export class CramService {

  constructor(private http: Http) { }

  getCram(){
    return this.http.get('../assets/fake/cram.json').map((res:Response)=>res.json());
 }

}
