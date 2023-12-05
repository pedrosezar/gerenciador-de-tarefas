import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

import { TaskService } from "../../services/task.service";
import { Task } from "../../model/task";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  @ViewChild("form") form!: NgForm;

  task: Task;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(public taskService: TaskService, private route: ActivatedRoute) {
    this.task = {
      id: this.route.snapshot.params["id"],
      title: "",
      status: false,
      date: new Date(),
    };
  }

  ngOnInit(): void {
    this.taskService.getById(this.route.snapshot.params["id"]).subscribe({
      next: (data) => {
        this.task = data;
      },
      error: (e) => console.error(e),
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    const data = {
      title: this.task.title,
      status: this.task.status,
      date: this.task.date,
      id: this.task.id,
    };

    this.taskService.update(data).subscribe({
      next: (res) => {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = "Tarefa alterada com sucesso!";
        this.form.reset();
      },
      error: () => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = "Erro ao alterar a tarefa";
      },
    });
  }
}
