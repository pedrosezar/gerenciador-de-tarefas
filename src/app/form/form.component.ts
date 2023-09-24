import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  value = "";
  invalid = false;
  message = "";

  constructor() {}

  ngOnInit(): void {
    this.message = "";
  }

  onSubmit() {
    if (this.value == "") {
      this.invalid = true;
      this.message = "O campo título da tarefa não pode ficar vazio";
      return;
    }

    this.invalid = false;
    this.message = "Tarefa cadastrada com sucesso";
  }
}
