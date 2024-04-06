import './BoardMain.css'
import BoardCol from './BoardCol';
import BoardLetters from './labels/BoardLetters';
import BoardNumbers from './labels/BoardNumbers';
import BoardPieces from './BoardPieces';

export interface BoardRowProps {
    colVal: number
    colLet: string
}

function BoardMain() {
    let even: number = 0;
    let odd: number = 1;
    let colA: string = 'a';
    let colB: string = 'b';
    let colC: string = 'c';
    let colD: string = 'd';
    let colE: string = 'e';
    let colF: string = 'f';
    let colG: string = 'g';
    let colH: string = 'h';

    return (
        <>
            <BoardNumbers/>
            <div className='main-container'>
                <div className='label-board-container'>
                    <div className='board-main'>
                        <BoardCol colVal={even} colLet={colA}/>
                        <BoardCol colVal={odd} colLet={colB}/>
                        <BoardCol colVal={even} colLet={colC}/>
                        <BoardCol colVal={odd} colLet={colD}/>
                        <BoardCol colVal={even} colLet={colE}/>
                        <BoardCol colVal={odd} colLet={colF}/>
                        <BoardCol colVal={even} colLet={colG}/>
                        <BoardCol colVal={odd} colLet={colH}/>
                    </div>
                </div>
                <div>
                    <BoardLetters/>
                </div>
            </div>
            <BoardPieces/>
        </>
    )
}
export default BoardMain;