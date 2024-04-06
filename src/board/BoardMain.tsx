import './BoardMain.css'
import BoardCol from './BoardCol';
import BoardLetters from './BoardLetters';

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
            <div className='main-container'>
                <div className='board-main'>
                    <BoardCol colVal={even} colLet={colA}/>
                    <BoardCol colVal={odd} colLet={colA}/>
                    <BoardCol colVal={even} colLet={colA}/>
                    <BoardCol colVal={odd} colLet={colA}/>
                    <BoardCol colVal={even} colLet={colA}/>
                    <BoardCol colVal={odd} colLet={colA}/>
                    <BoardCol colVal={even} colLet={colA}/>
                    <BoardCol colVal={odd} colLet={colA}/>
                </div>
                <div>
                    <BoardLetters/>
                </div>
            </div>
        </>
    )
}
export default BoardMain;