import { Injectable, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, asyncScheduler } from "rxjs";
import { wiki } from "vtuber-wiki";

@Injectable({providedIn: 'root'})
export class VtuberApiService{
    constructor(private http: HttpClient){}
    getVtuber(name?:string): Observable<any>{
        // wiki(`${name}`).then(async(Output)=>{console.log(Output)})
        console.log('trying to get vtuber');
        const data = wiki(`Gawr Gura`);
        console.log(data);
        wiki(`Sukoya Kana`).then(async(output)=>{
            console.log(output)
        })
        const url = `https://virtualyoutuber.fandom.com/wiki/Gawr_Gura`;
        return this.http.get(url);
    }
}