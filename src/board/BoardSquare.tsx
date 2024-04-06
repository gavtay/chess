import { FunctionComponent } from 'react';
import { SquareColorProp } from './BoardCol';
import './BoardSquare.css'

const BoardSquare: FunctionComponent<SquareColorProp> = (props): JSX.Element => {
    let squareClass: string = `square-container ${props.colLet}${props.rowNum}`;

    return (
        <>
            <div id={props.squareColor} className={squareClass}></div>
        </>
    )
}
export default BoardSquare;