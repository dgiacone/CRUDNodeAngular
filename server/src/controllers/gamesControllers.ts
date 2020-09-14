import {Request, Response, request} from 'express'
import db from '../database'
import pool from '../database'

class GamesController{

    public async list(req:Request,res:Response){
        const juego= await pool.query('SELECT * FROM  ng_games_db.games') 
        res.json(juego)
    
    }

    public   async  listIndividual(req:Request,res:Response): Promise<any>{
        
        // Tomo el campo ID de la respuesta 

        const {id}=req.params;
        
        // Consulto el juego 

        const juego= await pool.query('SELECT * FROM  ng_games_db.games where id= ?',[id]) 
        
        //console.log(juego)
        
        // Valido si la cantidad de juegos es >0 si es asi devuelvo el dato si no un mensaje

        if( juego.length>0){

            return res.json(juego[0]);
        } else {

            res.status(404).json({text:"El juego no existe"})
        }
         
       
    }
    public async create(req:Request,res:Response){

        await pool.query('insert into games set ?', [req.body])
        res.json({text: 'Juego Guardado'})
    }

    public async delete(req:Request,res:Response):Promise<void>{

        // Tomo el campo ID de la respuesta 

        const {id}=req.params;
     
        // Elimino el Juego

        const juego= await pool.query('DELETE  FROM  ng_games_db.games where id= ?',[id]) 
        
        console.log(juego)
        
        // Valido si la cantidad de juegos es >0 si es asi devuelvo el dato si no un mensaje

       
        res.status(200).json({text:"El juego ha sido eliminado "})
       
         

    }

    public async update(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        const juego= await pool.query('UPDATE games set ? WHERE id=?',[req.body,id]) 
        res.status(200).json({message:"El juego actualizado "})
    }

}
export const gamesController = new GamesController()