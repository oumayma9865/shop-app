import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/sellers`);
  }

  acceptSeller(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/accept-seller`, { username });
  }

  rejectSeller(username: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reject-seller`, { username });
  }

  getLoggedInSellers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/logged-in-sellers`);
  }
  deleteSeller(username: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sellers/${username}`);
  }
}