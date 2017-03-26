import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CompositionService {
    constructor(private http: Http) {

    }

    getCompositions() {
        return this.http.get('http://localhost:8080/composition/get/all').map(res => res.json());
    }

}
export default CompositionService;
