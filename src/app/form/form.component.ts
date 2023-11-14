import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { TaskService } from "./../services/task.service";
import { Task } from "./../model/task";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @ViewChild("form") form!: NgForm;

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

  onSubmit() {
    this.isSubmitted = true;
    if (!this.taskService.isExist(this.task.title)) {
      this.taskService.save(this.task);
    } else {
      this.taskService.update(this.task);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = "Cadastro realizado com sucesso!";

    this.form.reset();
    this.task = new Task("");

    this.tasks = this.taskService.getTasks();
  }
}
