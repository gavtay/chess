import { FunctionComponent } from 'react';
import { SquareColorProp } from './BoardCol';
import './BoardSquare.css'

const BoardSquare: FunctionComponent<SquareColorProp> = (props): JSX.Element => {
    return (
        <>
            <div id={props.squareColor} className='square-container'></div>
        </>
    )
}
export default BoardSquare;