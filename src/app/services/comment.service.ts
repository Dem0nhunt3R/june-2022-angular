import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {baseURL, urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(baseURL + urls.comments);
  }

  getById(id: number): Observable<IComment> {
    return this.httpClient.get<IComment>(baseURL + urls.comments + '/' + id);
  }
}
