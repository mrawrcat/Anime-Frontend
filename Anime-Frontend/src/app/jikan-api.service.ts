import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, asyncScheduler } from "rxjs";


@Injectable({providedIn: 'root'})
export class JikanApiService{
    state_storage: any = undefined;
    private animeData = new BehaviorSubject({});
    currentAnimeData = this.animeData.asObservable();

    constructor(private http: HttpClient){}
    
    getAnime(title?:string): Observable<any>{
        const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;
        return this.http.get(url);
    }

    getAnimeData(title?: string): Observable<any>{
        // this.state_storage = this.getAnime(title);
        return this.getAnime(title);
    }

    changeAnimeData(data: any){
        this.animeData.next(data);
    }
}