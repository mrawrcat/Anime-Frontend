import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, asyncScheduler } from "rxjs";


@Injectable({providedIn: 'root'})
export class JikanApiService{
    constructor(private http: HttpClient){}
    
    getAnime(title?:string): Observable<any>{
        const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;
        return this.http.get(url);
    }
}