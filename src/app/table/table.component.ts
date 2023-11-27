import { Component, OnInit } from "@angular/core";

import { Shared } from "./../util/shared";
import { TaskService } from "./../services/task.service";
import { TaskPromiseService } from "./../services/task-promise.service";
import { Task } from "./../model/task";
import { WebStorageUtil } from "./../util/web-storage-util";
import { Constants } from "./../util/constants";
import { Router } from "@angular/router";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  task!: Task;
  tasks?: Task[];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private taskService: TaskService,
    private taskPromiseService: TaskPromiseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.task = WebStorageUtil.get(Constants.TASKS_KEY);
    this.tasks = this.taskService.getTasks();
    this.taskPromiseService
      .getByTitle(Constants.TASKS_KEY)
      .then((t: Task[]) => {
        this.task = t[0];
        localStorage.setItem(
          Constants.TASKS_KEY,
          JSON.stringify(Task.toWS(this.task))
        );
      })
      .catch((e) => {
        //erro ao pegar do json-server
        this.task = WebStorageUtil.get(Constants.TASKS_KEY);
      });
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de tarefas cadastrados sem pressionar o submit.
   * @param task
   */
  onEdit(task: Task) {
    let clone = Task.clone(task);
    this.task = clone;
    this.router.navigate(["/tarefa/", task?.id]);
  }

  onDelete(title: string) {
    let confirmation = window.confirm(
      "Você tem certeza que deseja remover " + title
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.taskService.delete(title);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = "O item foi removido com sucesso!";
    } else {
      this.message = "Opps! O item não pode ser removido!";
    }
    this.tasks = this.taskService.getTasks();
  }
}
