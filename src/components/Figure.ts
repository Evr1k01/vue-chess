import Color from "@/helpers/enums/Color";
import logo from "@/assets/figures/black-bishop.png"
import FigureNames from "@/helpers/enums/FigureNames";
import {Cell} from "@/components/Cell";

export class Figure {
    color: Color;
    cell: Cell;
    logo: typeof logo | null;
    name: FigureNames

    constructor(color: Color, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null
        this.name = FigureNames.FIGURE
    }

    canMoveFigure = (target: Cell): boolean => {
        return true
    }

    moveFigure = (target: Cell) => {

    }
}