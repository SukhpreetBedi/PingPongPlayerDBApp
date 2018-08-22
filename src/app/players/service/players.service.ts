import {Injectable} from '@angular/core';
import {Player} from '../model/player.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlayersService {
  body: any;

  constructor(private http: HttpClient) {
  }

  postPlayer(player: Player) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post('http://localhost:58396/api/Players/', JSON.stringify(player), {headers: headers});
  }

  putPlayer(player: Player) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.put('http://localhost:58396/api/Players/' + player.PlayerID, JSON.stringify(player), {headers: headers});
  }

  getPlayers() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get('http://localhost:58396/api/Players/', {headers: headers});
  }

  getPlayer(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get('http://localhost:58396/api/Players/' + id, {headers: headers});
  }

  deletePlayer(id: number) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.delete('http://localhost:59146/api/Players/' + id, {headers: headers});
  }
}
