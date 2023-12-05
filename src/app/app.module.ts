import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container/container.component";
import { HeaderComponent } from "./header/header.component";
import { TableComponent } from "./table/table.component";
import { CreateComponent } from "./form/create/create.component";
import { EditComponent } from "./form/edit/edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    TableComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
