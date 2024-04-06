import './BoardPieces.css'
import { boardPieces } from '../boardPiecesData';

function BoardPieces() {

    function renderPieces() {
        boardPieces.map((piece) => {
            let pieceLocation: string = piece.location;
            let pieceImgSrc: string = piece.src;
            let pieceName: string = piece.name;
            let pieceParentLocation = document.getElementsByClassName(pieceLocation);

            console.log(pieceParentLocation[0]);

            const pieceElement = document.createElement('img');
            pieceElement.setAttribute('class', 'piece-img');
            pieceElement.setAttribute('id', pieceName);
            pieceElement.setAttribute('src', pieceImgSrc);

            // console.log(pieceElement);

            // pieceParentLocation.appendChild(pieceElement);
        });
    }

    return (
        <>
            {renderPieces()}
        </>
    )
}
export default BoardPieces;