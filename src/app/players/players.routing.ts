import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayerDetailsComponent} from './players-home/player-details/player-details.component';
import {PlayersHomeComponent} from './players-home/players-home.component';

const routes: Routes = [
  {path: '', component: PlayersHomeComponent},
  {path: 'details', component: PlayerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {
}
