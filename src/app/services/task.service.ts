import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { Task } from './../model/task';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks!: Task[];
  constructor() {
    this.tasks = WebStorageUtil.get(Constants.TASKS_KEY);
  }

  save(task: Task) {
    this.tasks = WebStorageUtil.get(Constants.TASKS_KEY);
    this.tasks.push(task);
    WebStorageUtil.set(Constants.TASKS_KEY, this.tasks);
  }

  update(task: Task) {
    this.tasks = WebStorageUtil.get(Constants.TASKS_KEY);
    this.delete(task.title);
    this.save(task);
  }

  delete(title: string): boolean {
    this.tasks = WebStorageUtil.get(Constants.TASKS_KEY);
    this.tasks = this.tasks.filter((t) => {
      return t.title?.valueOf() != title?.valueOf();
    });

    WebStorageUtil.set(Constants.TASKS_KEY, this.tasks);
    return true;
  }

  isExist(value: string): boolean {
    this.tasks = WebStorageUtil.get(Constants.TASKS_KEY);
    for (let t of this.tasks) {
      if (t.title?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getTasks(): Task[] {
    this.tasks = WebStorageUtil.get(Constants.TASKS_KEY);
    return this.tasks;
  }
}
