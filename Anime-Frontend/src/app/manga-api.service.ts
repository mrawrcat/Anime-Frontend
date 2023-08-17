import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, asyncScheduler } from "rxjs";


@Injectable({providedIn: 'root'})
export class VtuberApiService{
    constructor(private http: HttpClient){}
    getSeries(title?:string): Observable<any>{
        const url = ``;
        return this.http.get(url);
    }
}