import Color from "@/helpers/enums/Color";
import logo from "@/assets/figures/black-bishop.png"
import FigureNames from "@/helpers/enums/FigureNames";
import {Cell} from "@/components/Cell";
import figureNames from "@/helpers/enums/FigureNames";

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

    canMoveFigure(target: Cell): boolean {
        if (target.figure?.color === this.color) return false
        if (target.figure?.name === figureNames.KING) return false
        return true
    }

    moveFigure(target: Cell) {

    }
}