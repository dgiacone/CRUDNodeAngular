import { Component, OnInit, HostBinding } from '@angular/core';
import{GamesService} from '../../services/games.service'
import { Game } from 'src/app/Models/Game';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes='row';

  games:any =[];

  constructor(private gamesService:GamesService,private router:Router) { }

  ngOnInit() {

      this.getGames()

  }

  getGames(){

    this.gamesService.getGames().subscribe(

      res =>{

        this.games=res;
      },
      err=>console.log(err)

    )

    
  }

  deleteGame(id:string){


    this.gamesService.deleteGame(id).subscribe (

      res=>{this.getGames()},
      err=>console.log(err)
    )

  }


  editGame(id:string){

    this.router.navigate(['/games/edit/'+id])


  }


// fin
}


  
 