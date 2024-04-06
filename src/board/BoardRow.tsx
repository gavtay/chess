import { FunctionComponent } from 'react'
import { BoardRowProps } from './BoardMain'
import BoardSquare from './BoardSquare'
import './BoardRow.css'

export interface SquareColorProp {
    squareColor: string
}

const BoardRow: FunctionComponent<BoardRowProps> = (props): JSX.Element => {
    let squareColorWhite: string = 'square-color-white';
    let squareColorBlack: string = 'square-color-black';

    function applyId() {
        if (props.rowVal === 0) {
            return (
                <>
                    <div id='even-row' className='row-container'>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div id='odd-row' className='row-container'>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                        <BoardSquare squareColor={squareColorBlack}/>
                        <BoardSquare squareColor={squareColorWhite}/>
                    </div>
                </>
            )
        }
    }

    return (applyId())
}
export default BoardRow;