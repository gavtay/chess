import './BoardMain.css'
import BoardRow from './BoardRow';

export interface BoardRowProps {
    rowVal: number
}

function BoardMain() {
    let even: number = 0;
    let odd: number = 1;
  
    return (
        <>
            <div className='board-main'>
                <BoardRow rowVal={even}/>
                <BoardRow rowVal={odd}/>
                <BoardRow rowVal={even}/>
                <BoardRow rowVal={odd}/>
                <BoardRow rowVal={even}/>
                <BoardRow rowVal={odd}/>
                <BoardRow rowVal={even}/>
                <BoardRow rowVal={odd}/>
            </div>
        </>
    )
}
export default BoardMain;