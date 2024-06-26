export function selectPiece(event: any, isClicked: any, setIsClicked: any, setSquareColor: any, setSelectedPiece: any, parentElement: any) {
    setSelectedPiece(event.target.id)
    if (parentElement.id === 'square-color-black') {
        setSquareColor("#8f35b9");
    }

    setIsClicked(!isClicked);
    parentElement.style.backgroundColor='#FF8FAB';
    return;
}

export function selectMove(event: any, piecePlacement: any, setPiecePlacement: any, selectedSquare: any, selectedPiece: any): any {
    let squareLocation = event.target;

    console.log(selectedPiece);
    let piecesLocation = piecePlacement.filter((piece: any) => {
        if (piece.name === selectedPiece) {
            return piece.location;
        }
    });
 
    piecesLocation = piecesLocation[0].location;

    console.log(selectedPiece + ' to ' + squareLocation.classList[1])

        if (squareLocation.id === 'square-color-black' || squareLocation.id === 'square-color-white') {
            // change the color of the pieces original square here
            let originalSquare = Array.from(document.getElementsByClassName(piecesLocation) as HTMLCollectionOf<HTMLElement>)
            originalSquare[0].style.backgroundColor = selectedSquare.color;
            
            // remove original piece
            originalSquare[0].removeChild(originalSquare[0].firstChild!);

            // move the piece to desired empty square
            setPiecePlacement((piecePlacement: any) => {
                return piecePlacement.map((piece: any) => {
                    if (piece.location === piecesLocation) {

                        return { ...piece, location: squareLocation.classList[1]}
                    }
                    return piece;
                })
            })
            return;
        } else if (squareLocation.className === 'piece-img') {
            console.log('This is a piece');
            console.log('Move the piece to this square and remove the piece previously there.');

            let pieceTeam: string = selectedPiece.slice(0, 4);
            console.log(pieceTeam);
            
            return;
        } else {
            console.log('Not a valid move');
        }
}