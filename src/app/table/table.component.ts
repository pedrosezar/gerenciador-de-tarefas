import { Component, OnInit } from "@angular/core";

import { TaskService } from "./../services/task.service";
import { Task } from "./../model/task";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  tasks?: Task[];

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.retrieveTask();
  }

  retrieveTask(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
      },
      error: (e) => console.error(e),
    });
  }

  onDelete(id: number) {
    this.taskService.delete(id).subscribe({
      next: (res) => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = "Tarefa excluída com sucesso!";
        this.retrieveTask();
      },
      error: () => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = "Erro ao excluir a tarefa.";
      },
    });
  }
}
