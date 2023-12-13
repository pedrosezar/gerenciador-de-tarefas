import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { lastValueFrom } from "rxjs";

import { Task } from "./../model/task";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private URL = "http://localhost:3000/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.URL);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.URL}/${id}`);
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>(this.URL, task);
  }

  update(task: Task): Promise<Task> {
    return lastValueFrom(this.http.patch(`${this.URL}/${task.id}`, task));
  }

  delete(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
