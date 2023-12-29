import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EodModalComponent } from '../eod-modal/eod-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  taskArray = [{ taskName: 'Wake Up Early', isCompleted: false }];

  constructor() {}

  finishedArray: any = [];

  onSubmit(form: NgForm) {
    // console.log(form);
    this.taskArray.push({
      taskName: form.value.task,
      isCompleted: false,
    });

    // Reset the form to clear the input area
    form.resetForm();
  }

  onCheck(index: number) {
    // Delete or Move from active to finished list
    const completedTask = this.taskArray[index];
    this.taskArray.splice(index, 1);

    // Revert the status on clicking the checkbox
    completedTask.isCompleted = !completedTask.isCompleted;

    // console.log(this.taskArray);
    if (completedTask.isCompleted) {
      this.finishedArray.push(completedTask);
    }
  }

  // EOD button Functionality

  openEodModal(eodForm: NgForm) {
    const modal = document.createElement('app-eod-modal');
    modal.setAttribute(
      'tasks',
      JSON.stringify([...this.taskArray, ...this.finishedArray])
    );
    document.body.appendChild(modal);
  }
}
