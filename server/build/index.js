"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        // Inicia el servidor en el port 3000
        this.app.set('port', process.env.PORT || 3000);
        // Permite hacer un log respecto de los mensajes recibidos por el servidor
        this.app.use(morgan_1.default('dev'));
        // Permite el intercambio de mensajes con el cliente
        this.app.use(cors_1.default());
        // Me permite hacer petisiones json entre cliente y servidor
        this.app.use(express_1.default.json());
        // Para el caso en que queramos enviar directamente desde un formulario HTML
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        // Inicializa las rutas definidas en el archivo routes/indexRouter
        this.app.use('/', indexRoutes_1.default);
        // Inicializa las rutas definidas en el archivo games/indexRouter
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("sevrer on port 3000");
        });
    }
}
// Inicia el servidor
const server = new Server();
server.start();
