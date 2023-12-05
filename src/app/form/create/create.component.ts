import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { TaskService } from "../../services/task.service";
import { Task } from "../../model/task";

@Component({
  selector: "app-form",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"],
})
export class CreateComponent implements OnInit {
  @ViewChild("form") form!: NgForm;

  task: Task = {
    title: "",
    status: false,
    date: new Date(),
  };

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.isSubmitted = true;

    const data = {
      title: this.task.title,
      status: this.task.status,
      date: this.task.date,
    };

    this.taskService.save(data).subscribe({
      next: (res) => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = "Tarefa inserida com sucesso!";
        this.form.reset();
      },
      error: () => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = "Erro ao inserir a tarefa";
      },
    });
  }
}
