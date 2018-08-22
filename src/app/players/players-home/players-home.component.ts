import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Player} from '../model/player.model';
import {Router} from '@angular/router';
import {PlayersService} from '../service/players.service';

@Component({
  selector: 'app-players-home',
  templateUrl: './players-home.component.html',
  styleUrls: ['./players-home.component.css']
})
export class PlayersHomeComponent implements OnInit {
  playersList: any;
  public player: any;
  message: String;
  @ViewChild('deletePlayer') deletePlayer: any;
  @ViewChild('add') add: any;
  @ViewChild('toast') toast: ElementRef;
  showModal = true;
  public playerID: number;

  constructor(private router: Router, private playerService: PlayersService) {
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.player = new Player();
    this.playersList = [];
    this.playerService.getPlayers().subscribe(res => {
      this.playersList = res;
      console.log(res);
    });
  }

  OnDeleteClicked() {
    console.log(this.playerID);
    this.playerService.deletePlayer(this.playerID).subscribe(res => {
      this.loadPlayers();
    });
    this.player = new Player();
    this.deletePlayer.hide();

  }

  showDeleteModal(id: number) {
    this.playerID = id;
    console.log(this.playerID);
    this.deletePlayer.show();
  }


  displaySuccessAlert() {
    this.toast.nativeElement.classList.add('show');
    setTimeout(() => this.toast.nativeElement.classList.remove('show'), 3000);
  }

  onNavigateToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  onNavigateToAdd() {
    this.router.navigate(['/add']);
  }

}
