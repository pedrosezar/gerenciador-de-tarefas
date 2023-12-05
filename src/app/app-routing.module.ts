import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { CreateComponent } from "./form/create/create.component";
import { EditComponent } from "./form/edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: "tarefas", pathMatch: "full" },
  { path: "tarefas", component: TableComponent },
  { path: "tarefa/create", component: CreateComponent },
  { path: "tarefa/:id/edit", component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
