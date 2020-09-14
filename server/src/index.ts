import express, {Application} from 'express'
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import morgan from 'morgan';
import cors from 'cors';


class Server {

    public app:Application;

    constructor(){

        this.app= express();
        this.config();
        this.routes();

    } 

    config(): void{
        // Inicia el servidor en el port 3000
        this.app.set('port',process.env.PORT || 3000);
        // Permite hacer un log respecto de los mensajes recibidos por el servidor
        this.app.use(morgan('dev'));
        // Permite el intercambio de mensajes con el cliente
        this.app.use(cors())
        // Me permite hacer petisiones json entre cliente y servidor
        this.app.use(express.json());
        // Para el caso en que queramos enviar directamente desde un formulario HTML
        this.app.use(express.urlencoded({extended:false}));


    }

    routes(): void {
        // Inicializa las rutas definidas en el archivo routes/indexRouter
        this.app.use('/',indexRoutes)
        // Inicializa las rutas definidas en el archivo games/indexRouter
        this.app.use('/api/games',gamesRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'),()=>{

            console.log("sevrer on port 3000");

        })

    }


}
// Inicia el servidor
const server= new Server() 
server.start()