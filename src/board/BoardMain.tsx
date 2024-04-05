import './BoardMain.css'
import BoardRow from './BoardRow';

function BoardMain() {

    return (
        <>
            <div className='board-main'>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
                <BoardRow/>
            </div>
        </>
    )
}
export default BoardMain;