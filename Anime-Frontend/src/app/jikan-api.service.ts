import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, asyncScheduler } from "rxjs";


@Injectable({providedIn: 'root'})
export class JikanApiService{
    state_storage: any;

    constructor(private http: HttpClient){}
    
    getAnime(title?:string): Observable<any>{
        const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;
        return this.http.get(url);
    }

    getAnimeData(title?: string): Observable<any>{
        // this.state_storage = this.getAnime(title);
        return this.getAnime(title);
    }
}