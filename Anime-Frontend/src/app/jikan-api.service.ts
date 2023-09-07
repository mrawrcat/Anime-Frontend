import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, asyncScheduler } from "rxjs";


@Injectable({providedIn: 'root'})
export class JikanApiService{
    // private searchterm = new BehaviorSubject([]);
    // currentSearchTerm = this.searchterm.asObservable();
    private animeData = new BehaviorSubject({});
    currentAnimeData = this.animeData.asObservable();

    constructor(private http: HttpClient){}
    
    getAnime(title?:string): Observable<any>{
        const url = `https://api.jikan.moe/v4/anime?q=${title}&sfw`;
        return this.http.get(url);
    }

    getAnimeData(title?: string): Observable<any>{
        return this.getAnime(title);
    }

    changeAnimeData(data: any){
        this.animeData.next(data);
    }

    // getSearchTerm(): Observable<any>{
    //     return this.searchterm;
    // }
    
    // changeSearchTerm(data: any){
    //     this.searchterm.next(data);
    // }
}