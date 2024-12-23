import {Figure} from "@/components/Figure";
import Color from "@/helpers/enums/Color";
import {Cell} from "@/components/Cell";
import blackFigure from "@/assets/figures/black-rook.png";
import whiteFigure from "@/assets/figures/white-rook.png";
import FigureNames from "@/helpers/enums/FigureNames";

export class Rook extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackFigure : whiteFigure
        this.name = FigureNames.ROOK
    }
}