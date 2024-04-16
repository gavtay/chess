export function selectPiece(event: any, isClicked: any, setIsClicked: any, setSelectedPiece: any, parentElement: any): [string, string] {
    let squareColor: string = '#eeeed2';
    if (parentElement.id === 'square-color-black') {
        squareColor = "#8f35b9";
    }

    let pieceName: string = event.target.id;
    setIsClicked(!isClicked);
    parentElement.style.backgroundColor='#FF8FAB';

    return [squareColor, pieceName];
}

export function selectMove(event: any, piecePlacement: any, setPiecePlacement: any, isClicked: any, setIsClicked: any, squareColor: string, pieceName: string) {
    let squareLocation = event.target;

    let piecesLocation = piecePlacement.filter((piece: any) => {
        if (piece.name === pieceName) {
            return piece.location;
        }
    });
    piecesLocation = piecesLocation[0].location;

    console.log(pieceName + ' to ' + squareLocation.classList[1])

        if (squareLocation.id === 'square-color-black' || squareLocation.id === 'square-color-white') {
            // change the color of the pieces original square here
            let originalSquare = Array.from(document.getElementsByClassName(piecesLocation) as HTMLCollectionOf<HTMLElement>)
            originalSquare[0].style.backgroundColor = squareColor;
            
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
            
            return;
        } else {
            console.log('Not a valid move');
        }
}