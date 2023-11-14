import { Component, OnInit } from "@angular/core";

import { TaskService } from "./../services/task.service";
import { Task } from "./../model/task";

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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.task = new Task("");
    this.tasks = this.taskService.getTasks();
  }

  /**
   * Realiza o clone do objeto, justamente para não refletir as mudanças
   * imediatamente na lista de tarefas cadastrados sem pressionar o submit.
   * @param task
   */
  onEdit(task: Task) {
    let clone = Task.clone(task);
    this.task = clone;
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
