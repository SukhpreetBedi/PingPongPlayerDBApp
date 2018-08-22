import {Component, OnInit} from '@angular/core';
import {PlayersService} from './service/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {

  constructor(private playerService: PlayersService) {
  }

  ngOnInit() {
  }

}
