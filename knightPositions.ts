// helper function to find possible knight move
function getPossibleKnightMoves(position: string) {
    const file = position[0];
    const tile = parseInt(position[1]);
    
    const possibleMoves = [];

    const knightMoves = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
    ];

    for (const [xPos, yPos] of knightMoves) {
        const newFile = String.fromCharCode(file.charCodeAt(0) + xPos);
        const newTile = tile + yPos;
        
        if (newFile >= 'a' && newFile <= 'h' && newTile >= 1 && newTile <= 8) {
            possibleMoves.push(newFile + newTile);
        }
    }

    return possibleMoves;
}

// main function
function knightPositions(pawnPositions: string[]) {

    const possibleMovesMap: Record<string, number> = {}

    for (const pawnPosition of pawnPositions) {
        const possibleMoves = getPossibleKnightMoves(pawnPosition)
        possibleMoves.forEach((move) => {
            possibleMovesMap[move] = (possibleMovesMap[move] || 0) + 1
        })
    }

    const possiblePositionsEntries = Object.entries(possibleMovesMap)
    // get first index position as default
    let result = [possiblePositionsEntries[0][0]]

    for (let i = 1; i < possiblePositionsEntries.length; i++) {
        if (possiblePositionsEntries[i][1] > possibleMovesMap[result[0]]) {
            result = [possiblePositionsEntries[i][0]]
        } else if (possiblePositionsEntries[i][1] === possibleMovesMap[result[0]]) {
            result.push(possiblePositionsEntries[i][0])
        }
    }

    return result
}

const input1 = ["a1", "b6", "c3", "e5", "f8", "h4"]
const output1 = ["g6","d7"]

console.log('Test Case 1')
console.log('Result:', knightPositions(input1))
console.log('Expected:', output1)

console.log('-----------')

const input2 = ["a1", "b6", "c3", "f8", "h4"]
const output2 = ["a4", "d5", "d7", "g6"]

console.log('Test Case 2')
console.log('Result:', knightPositions(input2))
console.log('Expected:', output2)


