import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(environment.apiUrl + '/api/register/', data);
  }

  login(data: any) {
    return this.http.post(environment.apiUrl + '/api/login/', data);
  }

  getData() {
    return this.http.get('http://127.0.0.1:8000/api/tasks');
  }

  insertData(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/tasks/create', data);
  }

  deleteData(id: any) {
    return this.http.delete('http://127.0.0.1:8000/api/tasks/delete/' + id);
  }

  getTasksById(id: any) {
    return this.http.get('http://127.0.0.1:8000/api/tasks/' + id);
  }

  updateData(id: any, data: any) {
    return this.http.put('http://127.0.0.1:8000/api/tasks/update/' + id, data);
  }
}
