export interface Game {

    // el "?" indica que el campo es opcional

    id?: number;
    title?:string;
    description?:string;
    image?:string;
    created_at?: Date
}