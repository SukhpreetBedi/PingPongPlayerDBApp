import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {PlayerRoutingModule} from './players.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PlayerRoutingModule
  ],
  declarations: []
})
export class PlayersModule {
}
