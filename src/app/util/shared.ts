import { Constants } from "./constants";
import { Task } from "./../model/task";

export class Shared {
  constructor() {}

  /**
	Cadastra um tarefa default para funcionamento.
	Só realiza o cadastro caso a tarefa ainda não esteja salva no WebStorage.
*/
  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.TITLE_KEY) != null) {
      return;
    }

    //tarefa definida na forma literal
    let task = new Task(Constants.TITLE_KEY);

    localStorage.setItem(Constants.TITLE_KEY, JSON.stringify(task));
    localStorage.setItem(Constants.TASKS_KEY, JSON.stringify([]));
  }
}
