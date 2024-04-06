import { FunctionComponent } from 'react'
import { BoardRowProps } from './BoardMain'
import BoardSquare from './BoardSquare'
import './BoardCol.css'

export interface SquareColorProp {
    squareColor: string
    colLet: string
    squareNum: string
}

const BoardRow: FunctionComponent<BoardRowProps> = (props): JSX.Element => {
    let squareColorWhite: string = 'square-color-white';
    let squareColorBlack: string = 'square-color-black';
    let squareOne: string = '1';
    let squareTwo: string = '2';
    let squareThree: string = '3';
    let squareFour: string = '4';
    let squareFive: string = '5';
    let squareSix: string = '6';
    let squareSeven: string = '7';
    let squareEight: string = '8';

    function applyId() {
        if (props.colVal === 0) {
            return (
                <>
                    <div id='even-col' className='col-container'>
                        <BoardSquare colLet={props.colLet} squareNum={squareOne} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareTwo} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareThree} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareFour} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareFive} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareSix} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareSeven} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareEight} squareColor={squareColorBlack}/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div id='odd-col' className='col-container'>
                        <BoardSquare colLet={props.colLet} squareNum={squareOne} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareTwo} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareThree} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareFour} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareFive} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareSix} squareColor={squareColorWhite}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareSeven} squareColor={squareColorBlack}/>
                        <BoardSquare colLet={props.colLet} squareNum={squareEight} squareColor={squareColorWhite}/>
                    </div>
                </>
            )
        }
    }

    return (applyId())
}
export default BoardRow;