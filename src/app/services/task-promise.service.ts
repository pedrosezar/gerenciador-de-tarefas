import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Task } from "./../model/task";
import { lastValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskPromiseService {
  URL = "http://localhost:3000/tasks";
  URL_PT = "http://localhost:3000/tarefas";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private httpClient: HttpClient) {}

  getByTitle(title: string): Promise<Task[]> {
    return lastValueFrom(
      this.httpClient.get<Task[]>(`${this.URL_PT}/${title}`)
    );
  }

  save(task: Task): Promise<Task> {
    return lastValueFrom(
      this.httpClient.post<Task>(
        this.URL,
        JSON.stringify(task),
        this.httpOptions
      )
    );
  }

  patch(task: Task): Promise<Task> {
    return lastValueFrom(
      this.httpClient.patch<Task>(
        `${this.URL}/${task.id}`,
        JSON.stringify(task),
        this.httpOptions
      )
    );
  }

  update(task: Task): Promise<Task> {
    return lastValueFrom(
      this.httpClient.put<Task>(
        `${this.URL}/${task.id}`,
        JSON.stringify(task),
        this.httpOptions
      )
    );
  }
}
