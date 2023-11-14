export class Task {
  id!: string;
  title: string;
  status: boolean;
  date: Date;
  constructor(title: string, status: boolean = false, date: Date = new Date()) {
    this.id = String(Math.round(Math.random() * 1000));
    this.title = title;
    this.status = status;
    this.date = date;
  }

  public static clone(task: Task) {
    let t: Task = new Task(task.title, task.status);
    t.title = task.title;
    t.status = task.status;
    t.date = task.date;
    return t;
  }

  /**
   * Transforma um objeto pego da API para a versão salva no WebStorage
   * @param task
   * @returns
   */
  public static toWS(task: Task) {
    let t: Task = new Task(task.title, task.status);
    t.title = task.title;
    t.status = task.status;
    t.date = task.date;
    return t;
  }
}
