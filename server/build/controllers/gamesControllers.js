"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesController = void 0;
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const juego = yield database_1.default.query('SELECT * FROM  ng_games_db.games');
            res.json(juego);
        });
    }
    listIndividual(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Tomo el campo ID de la respuesta 
            const { id } = req.params;
            // Consulto el juego 
            const juego = yield database_1.default.query('SELECT * FROM  ng_games_db.games where id= ?', [id]);
            //console.log(juego)
            // Valido si la cantidad de juegos es >0 si es asi devuelvo el dato si no un mensaje
            if (juego.length > 0) {
                return res.json(juego[0]);
            }
            else {
                res.status(404).json({ text: "El juego no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('insert into games set ?', [req.body]);
            res.json({ text: 'Juego Guardado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // Tomo el campo ID de la respuesta 
            const { id } = req.params;
            // Elimino el Juego
            const juego = yield database_1.default.query('DELETE  FROM  ng_games_db.games where id= ?', [id]);
            console.log(juego);
            // Valido si la cantidad de juegos es >0 si es asi devuelvo el dato si no un mensaje
            res.status(200).json({ text: "El juego ha sido eliminado " });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const juego = yield database_1.default.query('UPDATE games set ? WHERE id=?', [req.body, id]);
            res.status(200).json({ message: "El juego actualizado " });
        });
    }
}
exports.gamesController = new GamesController();
