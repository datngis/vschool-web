import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
const API = `${environment.apiUrl}`;

@Injectable({
    providedIn: 'root',
})
export class AuthenServices {
    constructor(private _httpClient: HttpClient) {}

    public signIn(data): Observable<any> {
        return this._httpClient.post<any>(`${API}/sign-in`,data);
    }

    public encryptPass(password): Promise<any> {
        const params = {
            text: password
        };
        return this._httpClient.post<any>(`${API}/dev/en_rsa`,params).toPromise();
    }

    public verifyAccessToken(): Observable<any> {
        return this._httpClient.get<any>(`${API}/verify-access-tk`,{ headers: { 'Authorization': `${localStorage.getItem('accessToken')}` } });
    }
}
