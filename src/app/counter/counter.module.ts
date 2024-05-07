import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AsyncPipe
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
