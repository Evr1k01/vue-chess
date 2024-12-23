import {Figure} from "@/components/Figure";
import Color from "@/helpers/enums/Color";
import {Cell} from "@/components/Cell";
import blackFigure from '@/assets/figures/black-bishop.png'
import whiteFigure from '@/assets/figures/white-bishop.png'
import FigureNames from "@/helpers/enums/FigureNames";

export class Bishop extends Figure {
    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackFigure : whiteFigure
        this.name = FigureNames.BISHOP
    }
}