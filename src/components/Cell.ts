import Color from "@/helpers/enums/Color";
import {Figure} from "@/components/Figure";
import {Board} from "@/components/Board";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Color;
    figure: Figure | null;
    board: Board;
    available: boolean

    constructor(board: Board, x: number, y: number, color: Color, figure: Figure | null, available: boolean) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = available;
    }
}