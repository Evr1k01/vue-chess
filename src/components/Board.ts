import {Cell} from "@/components/Cell";
import Color from "@/helpers/enums/Color";
import {Pawn} from "@/components/figures/Pawn";
import {King} from "@/components/figures/King";
import {Queen} from "@/components/figures/Queen";
import {Knight} from "@/components/figures/Knight";
import {Bishop} from "@/components/figures/Bishop";
import {Rook} from "@/components/figures/Rook";
export class Board {
    cells: Cell[][] = []

    public initBoard = () => {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Color.BLACK, null, true))
                } else {
                    row.push(new Cell(this, j, i, Color.WHITE, null, true))
                }
            }
            this.cells.push(row)
        }
    }

    private getCell = (x: number, y: number) => this.cells[y][x]

    private addPawls = () => {
        for (let i = 0; i < 8; i++) {
            new Pawn(Color.BLACK, this.getCell(1, i))
            new Pawn(Color.WHITE, this.getCell(6, i))
        }
    }
    private addQueens = () => {
        new Queen(Color.BLACK, this.getCell(0, 3))
        new Queen(Color.WHITE, this.getCell(7, 3))
    }
    private addKings = () => {
        new King(Color.BLACK, this.getCell(0, 4))
        new King(Color.WHITE, this.getCell(7, 4))
    }
    private addKnights = () => {
        const knights = [
            { color: Color.BLACK, position: { x: 0, y: 1 } },
            { color: Color.WHITE, position: { x: 7, y: 6 } },
            { color: Color.BLACK, position: { x: 0, y: 6 } },
            { color: Color.WHITE, position: { x: 7, y: 1 } },
        ];

        knights.forEach(({ color, position }) => {
            new Knight(color, this.getCell(position.x, position.y));
        });
    }
    private addBishops = () => {
        const bishops = [
            { color: Color.BLACK, position: { x: 0, y: 2 } },
            { color: Color.WHITE, position: { x: 7, y: 5 } },
            { color: Color.BLACK, position: { x: 0, y: 5 } },
            { color: Color.WHITE, position: { x: 7, y: 2 } },
        ];

        bishops.forEach(({ color, position }) => {
            new Bishop(color, this.getCell(position.x, position.y));
        });
    }

    private addRooks = () => {
        const rooks = [
            { color: Color.BLACK, position: { x: 0, y: 0 } },
            { color: Color.WHITE, position: { x: 7, y: 7 } },
            { color: Color.BLACK, position: { x: 0, y: 7 } },
            { color: Color.WHITE, position: { x: 7, y: 0 } },
        ];

        rooks.forEach(({ color, position }) => {
            new Rook(color, this.getCell(position.x, position.y));
        });
    }

    public addFigures = () => {
        this.addPawls()
        this.addQueens()
        this.addKings()
        this.addKnights()
        this.addBishops()
        this.addRooks()
    }
}