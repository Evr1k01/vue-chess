import Color from "@/helpers/enums/Color";
import {Figure} from "@/components/Figure";
import {Board} from "@/components/Board";
import {Pawn} from "@/components/figures/Pawn";

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

    isEmpty(): boolean {
        return this.figure === null
    }

    isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure.color
        }
        return false
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.y !== target.y) {
            return false
        }

        const min = Math.min(this.x, target.x)
        const max = Math.max(this.x, target.x)
        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false
            }
        }
        return true
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.x !== target.x) {
            return false
        }

        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)
        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false
            }
        }
        return true
    }

    isEmptyDiagonal(target: Cell): boolean {
        const absX = Math.abs(target.x - this.x)
        const absY = Math.abs(target.y - this.y)
        if (absY !== absX)
            return false;

        const dy = this.y < target.y ? 1 : -1
        const dx = this.x < target.x ? 1 : -1

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty())
                return false;
        }
        return true
    }

    setFigure = (figure: Figure) => {
        this.figure = figure
        this.figure.cell = this
    }

    addLostFigure = (figure: Figure) => {
        figure.color === Color.BLACK
            ? this.board.lostBlackFigures = [...this.board.lostBlackFigures, figure]
            : this.board.lostWhiteFigures = [...this.board.lostWhiteFigures, figure]
    }

    moveFigure = (target: Cell) => {
        if (this.figure && this.figure.canMoveFigure(target)) {
            this.figure.moveFigure(target)
            if (target.figure) {
                this.addLostFigure(target.figure)
            }
            target.setFigure(this.figure)
            this.figure = null
        }
    }
}