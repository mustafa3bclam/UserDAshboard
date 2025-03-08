import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { shareReplay, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'https://reqres.in/api/users';
  private cache = new Map();

  constructor(private http: HttpClient) { }

  private searchSubject = new Subject<string>();
  searchObservable$ = this.searchSubject.asObservable();

  setSearchValue(value: string): void {
    this.searchSubject.next(value);
  }
  // getUsers(page: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}?page=${page}`);
  // }
  getUsers(page: number): Observable<any> {
    const cacheKey = `users-page-${page}`;
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    }

    return this.http.get(`${this.apiUrl}?page=${page}`).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching users', error);
        throw error;
      }),
      tap(data => this.cache.set(cacheKey, data))
    );
  }
  // getUser(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }
  getUser(id: number): Observable<any> {
    const cacheKey = `user-${id}`;
    if (this.cache.has(cacheKey)) {
      return of(this.cache.get(cacheKey));
    }

    return this.http.get(`${this.apiUrl}/${id}`).pipe(
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching user', error);
        throw error;
      }),
      tap(data => this.cache.set(cacheKey, data))
    );
  }

}
export interface User {
  id: number;
  name: string;
  email: string;
}
