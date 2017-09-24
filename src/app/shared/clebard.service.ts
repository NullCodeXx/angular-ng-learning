//Service Clebard.
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Promise } from 'q';


@Injectable()
export class ClebardService {
    //Lien vers notre API.
    private urlApi:string = "http;/localhost:3000";
    // Injection du htttpClient.
    constructor(private httpClient:HttpClient) {};
    //Expose des methodes.
    getAllClebar():Promise<Clebard> {
        return this.httpClient.get<Clebard[]>(this.urlApi)
        .toPromise();
    }
    
    addClebard(chien:Clebard):Promise<Clebard> {
        return this.httpClient.post<Clebard[]>(this.urlApi)
        .toPromise();
    }

    removeClebard(chien:Clebard):Promise<void> {
        return this.httpClient.delete<void[]>(this.urlApi + '/' + clebard.id)
        .toPromise();
    }

}