import {Figure} from "@/components/Figure";
import Color from "@/helpers/enums/Color";
import {Cell} from "@/components/Cell";
import blackFigure from "@/assets/figures/black-king.png";
import whiteFigure from "@/assets/figures/white-king.png";
import FigureNames from "@/helpers/enums/FigureNames";

export class King extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackFigure : whiteFigure
        this.name = FigureNames.KING
    }

    canMoveFigure = (target: Cell): boolean => {
        if (!super.canMoveFigure(target)) {
            return false
        }
        if (Math.abs(target.x - this.cell.x) <= 1 && Math.abs(target.y - this.cell.y) <= 1) {
            return true;
        }
        return false
    }
}