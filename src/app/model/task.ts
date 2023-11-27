export class Task {
  id!: string;
  title: string;
  status: boolean;
  date: Date;
  constructor(title: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.title = title;
    this.status = false;
    this.date = new Date();
  }

  public static clone(task: Task) {
    let t: Task = new Task(task.title);
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
    let t: Task = new Task(task.title);
    t.title = task.title;
    t.status = task.status;
    t.date = task.date;
    return t;
  }
}
