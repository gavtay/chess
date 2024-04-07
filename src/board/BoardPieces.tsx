import { boardPieces } from '../boardPiecesData';
import { useEffect } from 'react';
import './BoardPieces.css'

function BoardPieces() {

    function renderPieces() {
        boardPieces.map((piece) => {
            let pieceLocation: string = piece.location;
            let pieceImgSrc: string = piece.src;
            let pieceName: string = piece.name;
            
            let pieceParentCollection = document.getElementsByClassName(pieceLocation);
            const divElement = document.createElement('div');
            const pieceElement = document.createElement('img');
            divElement.setAttribute('class', 'piece-container');
            pieceElement.setAttribute('class', 'piece-img');
            pieceElement.setAttribute('id', pieceName);
            pieceElement.setAttribute('src', pieceImgSrc);

            
            useEffect(() => {
                let pieceParentElement = pieceParentCollection[0];
                divElement.appendChild(pieceElement);
                
                pieceParentElement.append(divElement);
            })
        });
    }

    return (
        <>
            {renderPieces()}
        </>
    )
}
export default BoardPieces;