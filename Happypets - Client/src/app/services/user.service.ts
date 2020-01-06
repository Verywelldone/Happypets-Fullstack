import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../components/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<any> {
    console.log(id + ' ID FORM SERVICE ');
    return this.http.get(`${this.baseUrl}user-list/${id}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`${this.baseUrl}save-user`, user);
  }

  updateUser(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}update-user/${id}`, value);
  }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}delete-user/${id}`, {responseType: 'text'});
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}user-list`);
  }

}
