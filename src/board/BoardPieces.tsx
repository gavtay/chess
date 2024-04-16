import { useEffect, useState} from 'react';
import { selectPiece } from '../scripts/movePiece';
import { selectMove } from '../scripts/movePiece';
import './BoardPieces.css'

interface Piece {
    name: string,
    location: string,
    src: string
}

function BoardPieces() {
    const [piecePlacement, setPiecePlacement] = useState<Piece[]>([]);
    const [selectedPiece, setSelectedPiece] = useState('');
    const [selectedSquare, setSelectedSquare] = useState({color: '', location: ''});
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        setPiecePlacement([
            { 'name': 'blackKing', 'location': 'e8', 'src': '/src/assets/black-king.png' },
            { 'name': 'blackQueen', 'location': 'd8', 'src': '/src/assets/black-queen.png' },
            { 'name': 'blackBishopOne', 'location': 'f8', 'src': '/src/assets/black-bishop.png' },
            { 'name': 'blackBishopTwo', 'location': 'c8', 'src': '/src/assets/black-bishop.png' },
            { 'name': 'blackKnightOne', 'location': 'b8', 'src': '/src/assets/black-knight.png' },
            { 'name': 'blackKnightTwo', 'location': 'g8', 'src': '/src/assets/black-knight.png' },
            { 'name': 'blackRookOne', 'location': 'a8', 'src': '/src/assets/black-rook.png' },
            { 'name': 'blackRookTwo', 'location': 'h8', 'src': '/src/assets/black-rook.png' },
            { 'name': 'blackPawnOne', 'location': 'a7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnTwo', 'location': 'b7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnThree', 'location': 'c7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnFour', 'location': 'd7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnFive', 'location': 'e7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnSix', 'location': 'f7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnSeven', 'location': 'g7', 'src': '/src/assets/black-pawn.png' },
            { 'name': 'blackPawnEight', 'location': 'h7', 'src': '/src/assets/black-pawn.png' },

            { 'name': 'whiteKing', 'location': 'e1', 'src': '/src/assets/white-king.png' },
            { 'name': 'whiteQueen', 'location': 'd1', 'src': '/src/assets/white-queen.png' },
            { 'name': 'whiteBishopOne', 'location': 'f1', 'src': '/src/assets/white-bishop.png' },
            { 'name': 'whiteBishopTwo', 'location': 'c1', 'src': '/src/assets/white-bishop.png' },
            { 'name': 'whiteKnightOne', 'location': 'b1', 'src': '/src/assets/white-knight.png' },
            { 'name': 'whiteKnightTwo', 'location': 'g1', 'src': '/src/assets/white-knight.png' },
            { 'name': 'whiteRookOne', 'location': 'a1', 'src': '/src/assets/white-rook.png' },
            { 'name': 'whiteRookTwo', 'location': 'h1', 'src': '/src/assets/white-rook.png' },
            { 'name': 'whitePawnOne', 'location': 'a2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnTwo', 'location': 'b2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnThree', 'location': 'c2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnFour', 'location': 'd2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnFive', 'location': 'e2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnSix', 'location': 'f2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnSeven', 'location': 'g2', 'src': '/src/assets/white-pawn.png' },
            { 'name': 'whitePawnEight', 'location': 'h2', 'src': '/src/assets/white-pawn.png' }
        ]);
    }, []);
    
    useEffect(() => {
        renderPieces();
    }, [piecePlacement]);

    function renderPieces() {          
        piecePlacement.forEach(piece => {
            const { name, location, src } = piece;
            
            const pieceParentCollection = document.getElementsByClassName(location);
            let pieceParentElement = pieceParentCollection[0];

            if (pieceParentElement.hasChildNodes()) {
                return;
            }

            const divElement = document.createElement('div');
            const pieceElement = document.createElement('img');
            divElement.setAttribute('class', 'piece-container');
            pieceElement.setAttribute('class', 'piece-img');
            pieceElement.setAttribute('id', name);
            pieceElement.setAttribute('src', src);

            if (isClicked === false) {
                pieceElement.addEventListener('click', (event) => {
                    selectPiece(event, isClicked, setIsClicked, setSelectedSquare, setSelectedPiece, pieceParentElement);
                    event.stopPropagation();
                    
                    document.addEventListener('click', (e) => {
                        selectMove(e, piecePlacement, setPiecePlacement, selectedSquare, selectedPiece);
                    })
                })
            }
            
            divElement.appendChild(pieceElement);
            pieceParentElement.append(divElement);
        });
    }

    return null;
}
export default BoardPieces;