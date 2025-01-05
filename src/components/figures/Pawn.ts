import {Figure} from "@/components/Figure";
import Color from "@/helpers/enums/Color";
import {Cell} from "@/components/Cell";
import blackFigure from "@/assets/figures/black-pawn.png";
import whiteFigure from "@/assets/figures/white-pawn.png";
import FigureNames from "@/helpers/enums/FigureNames";

export class Pawn extends Figure {

    isFirstStep: boolean = true

    constructor(color: Color, cell: Cell) {
        super(color, cell);
        this.logo = color === Color.BLACK ? blackFigure : whiteFigure
        this.name = FigureNames.PAWN
    }

    canMoveFigure = (target: Cell): boolean => {
        if (!super.canMoveFigure(target)) {
            return false
        }
        const direction = this.cell.figure?.color === Color.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Color.BLACK ? 2 : -2

        if ((target.x === this.cell.x + direction || this.isFirstStep && (target.x === this.cell.x + firstStepDirection))
            && target.y === this.cell.y
            && this.cell.board.getCell(target.x, target.y).isEmpty()
        ) { return true }

        if (target.x === this.cell.x + direction
            && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
            && this.cell.isEnemy(target)
        ) { return true }

        return false
    }

    moveFigure = (target: Cell) => {
        super.moveFigure(target)
        this.isFirstStep = false
    }
}