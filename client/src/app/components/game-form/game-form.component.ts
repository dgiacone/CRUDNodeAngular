import { Component, OnInit,HostBinding  } from '@angular/core';
import{GamesService} from '../../services/games.service'
import { Game } from 'src/app/Models/Game';
import { ThrowStmt, TmplAstBoundAttribute } from '@angular/compiler';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  
  @HostBinding('class') classes='row';

  game:Game ={
    id:0,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  }

  edit: Boolean=false;
  
  constructor(private gamesService:GamesService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    //Verifico si biene le ID

    const params= this.activatedRoute.snapshot.params;
     
    if(params.id){
      this.gamesService.getGame(params.id).subscribe(

        res=>{
          console.log(res)
          this.game=res;
          this.edit=true;

        },
        err=> console.error(err)

      )
    }
    console.log(params)



  }

  saveNewGame(){
    // Elimino datos que no necesito
    delete this.game.created_at;
    delete this.game.id ;
    this.gamesService.saveGame(this.game)
    .subscribe (

      res=>{
        console.log(res)
        this.router.navigate(['/games'])
      },
      err=>console.log(err)
    )

  }

    updateGame(){
      // Elimino datos que no necesito
    const id=this.game.id
    delete this.game.created_at;
    delete this.game.id ;
    this.gamesService.updateGame(id,this.game).subscribe(
      res=>{

        this.router.navigate(['/games'])

      },
      err=>console.error(err)
    )

    }


}
