export function selectPiece(event: any, isClicked: any, setIsClicked: any, setSelectedPiece: any, parentElement: any) {
    let squareColor: string = '#eeeed2';
    if (parentElement.id === 'square-color-black') {
        squareColor = "#8f35b9";
    }

    setSelectedPiece(event.target.id);
    setIsClicked(!isClicked);
    parentElement.style.backgroundColor='#FF8FAB';

    return squareColor;
}

export function selectMove(event: any, selectedPiece: any, piecePlacement: any, setPiecePlacement: any, isClicked: any, setIsClicked: any, squareColor: string) {
    let squareLocation = event.target;
    // console.log(selectedPiece);

        if (squareLocation.id === 'square-color-black' || squareLocation.id === 'square-color-white') {
            console.log('This is a square');
            console.log('Move the piece to this square');

            // change the color of the pieces original square here


            // setPiecePlacement((piecePlacement: any) => {
            //     return piecePlacement.map((piece: any) => {
            //         // console.log(piece.location);
            //         // console.log(selectedPiece);
            //         if (piece.location === selectedPiece) {
            //             return { ...piece, location: squareLocation.classList[1]}
            //         }
            //         return piece;
            //     })
            // })
            return;
        } else if (squareLocation.className === 'piece-img') {
            console.log('This is a piece');
            console.log('Move the piece to this square and remove the piece previously there.');
            
            return;
        } else {
            console.log('Not a valid move');
        }
}