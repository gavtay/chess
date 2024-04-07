import { FunctionComponent } from 'react'
import { BoardRowProps } from './BoardMain'
import BoardSquare from './BoardSquare'
import './BoardCol.css'

export interface SquareColorProp {
    squareColor: string
    colLet: string
    rowNum: string
}

const BoardRow: FunctionComponent<BoardRowProps> = (props): JSX.Element => {
    let squareColorWhite: string = 'square-color-white';
    let squareColorBlack: string = 'square-color-black';
    let rowOne: string = '1';
    let rowTwo: string = '2';
    let rowThree: string = '3';
    let rowFour: string = '4';
    let rowFive: string = '5';
    let rowSix: string = '6';
    let rowSeven: string = '7';
    let rowEight: string = '8';

    function applyId() {
        if (props.colVal === 0) {
            return (
                <>
                    <div id='even-col' className='col-container'>
                        <BoardSquare colLet={props.colLet} rowNum={rowEight} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowSeven} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowSix} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowFive} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowFour} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowThree} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowTwo} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowOne} squareColor={squareColorBlack}/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div id='odd-col' className='col-container'>
                        <BoardSquare colLet={props.colLet} rowNum={rowEight} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowSeven} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowSix} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowFive} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowFour} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowThree} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowTwo} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} rowNum={rowOne} squareColor={squareColorWhite}/>
                    </div>
                </>
            )
        }
    }

    return (applyId())
}
export default BoardRow;