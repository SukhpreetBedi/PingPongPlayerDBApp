import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayersService} from '../../service/players.service';
import {NgForm} from '@angular/forms';
import {Player} from '../../model/player.model';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [PlayersService]
})
export class PlayerDetailsComponent implements OnInit {
  public player: any;
  id: number;
  message: string;
  path: string;
  isEdit: boolean;
  @ViewChild('editForm') form: any;

  constructor(private playersService: PlayersService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.resetForm();
    console.log(this.activatedRoute.snapshot.url['0'].path);
    this.path = this.activatedRoute.snapshot.url['0'].path;
    if (this.path === 'edit') {
      this.isEdit = true;
      this.player = new Player();
      this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
      });
      console.log(this.id);
      this.playersService.getPlayer(this.id).subscribe(res => {
        console.log(res);
        this.player = res;
      });
    } else {
      this.isEdit = false;
      this.player = new Player();
    }
  }

  OnAddClicked() {
    const playerObject: any = {
      'PlayerID': this.player.PlayerID,
      'FirstName': this.player.FirstName,
      'LastName': this.player.LastName,
      'Age': this.player.Age,
      'SkillLevel': this.player.SkillLevel,
      'Email': this.player.Email
    };
    this.playersService.postPlayer(playerObject).subscribe(res => {
      /*this.player = new Player();*/
      this.message = 'A new Player has been Saved';
      /*this.displaySuccessAlert();*/
    });
    this.form.reset();
  }

  /*displaySuccessAlert() {
    this.toast.nativeElement.classList.add('show');
    setTimeout(() => this.toast.nativeElement.classList.remove('show'), 3000);
  }*/


  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.player = {
      PlayerID: null,
      FirstName: '',
      LastName: '',
      Age: null,
      SkillLevel: '',
      Email: ''
    };
  }

  OnUpdateClicked() {
    this.playersService.putPlayer(this.player).subscribe(res => {
    });
    this.message = 'Player has been updated';
  }

  OnDeleteClicked() {
    this.playersService.deletePlayer(this.player.PlayerID).subscribe(res => {
    });
    this.player = new Player();
    this.message = 'Player has been deleted';
    this.form.reset();
  }
}

