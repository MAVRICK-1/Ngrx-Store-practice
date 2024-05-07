import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './corePractice/store/counter/counter.reducer';
import { CounterModule } from './counter/counter.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { productReducers } from './corePractice/store/product/product.reducer';
import { ProductModule } from './product/product.module';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './corePractice/store/user/user.reducer';
import { UserEffects } from './corePractice/store/user/user.effects';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    SharedModule,
    ProductModule,
    UsersModule,
    HttpClientModule,
    StoreModule.forRoot({counter:counterReducer,products:productReducers,userState:userReducer}, {}),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
