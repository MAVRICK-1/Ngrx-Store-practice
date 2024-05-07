import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CounterActions from '../corePractice/store/counter/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count$=this.store.select('counter');
  constructor(private store: Store<{counter:number}>) {}
  increment(){
    //this.store.dispatch({type:'[Counter] Increment'});
    this.store.dispatch(CounterActions.increment());
  }
  decrement(){
    //this.store.dispatch({type:'[Counter] Decrement'});
    this.store.dispatch(CounterActions.decrement());
  }
  reset(){
    //this.store.dispatch({type:'[Counter] Reset'});
    this.store.dispatch(CounterActions.reset());
  }

}
