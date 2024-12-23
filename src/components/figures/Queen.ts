import {Figure} from "@/components/Figure";
import Color from "@/helpers/enums/Color";
import {Cell} from "@/components/Cell";
import blackFigure from "@/assets/figures/black-queen.png";
import whiteFigure from "@/assets/figures/white-queen.png";
import FigureNames from "@/helpers/enums/FigureNames";

export class Queen extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackFigure : whiteFigure
        this.name = FigureNames.QUEEN
    }
}