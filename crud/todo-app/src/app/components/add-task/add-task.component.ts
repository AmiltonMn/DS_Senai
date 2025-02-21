import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { DialogAnimationsExample } from '../task-input/task-input.component';

@Component({
  selector: 'app-add-task',
  imports: [MatIconModule, MatButtonModule, MatDialogModule, DialogAnimationsExample],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  
  constructor() {}

  addNewTask() {
    throw new Error('Method not implemented.');
  }
}