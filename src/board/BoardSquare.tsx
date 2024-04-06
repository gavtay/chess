import { FunctionComponent } from 'react';
import { SquareColorProp } from './BoardRow';
import './BoardSquare.css'

const BoardSquare: FunctionComponent<SquareColorProp> = (props): JSX.Element => {
    return (
        <>
            <div id={props.squareColor} className='square-container'></div>
        </>
    )
}
export default BoardSquare;