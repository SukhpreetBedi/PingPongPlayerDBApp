import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PlayersComponent} from './players/players.component';
import {PlayerDetailsComponent} from './players/players-home/player-details/player-details.component';

const routes: Routes = [
  {path: '', component: PlayersComponent},
  {path: 'edit/:id', component: PlayerDetailsComponent},
  {path: 'add', component: PlayerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
