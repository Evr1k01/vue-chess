import {Figure} from "@/components/Figure";
import Color from "@/helpers/enums/Color";
import {Cell} from "@/components/Cell";
import blackFigure from "@/assets/figures/black-knight.png";
import whiteFigure from "@/assets/figures/white-knight.png";
import FigureNames from "@/helpers/enums/FigureNames";

export class Knight extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackFigure : whiteFigure
        this.name = FigureNames.KNIGHT
    }

    canMoveFigure = (target: Cell): boolean => {
        if (!super.canMoveFigure(target)) {
            return false
        }
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }
}