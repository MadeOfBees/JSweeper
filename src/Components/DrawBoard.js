import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

export default function DrawBoard(difficulty) {
    const boardSize = (difficulty+1) * 8;
    const mineNum = (difficulty+1) * 6;
    const [board, setBoard] = React.useState([]);
    const [gameState, setGameState] = React.useState(0);
    const createBoard = () => {
        // this function creates a board of size boardSize x boardSize and fills it with 0s
        let board = [];
        for (let i = 0; i < boardSize; i++) {
            board.push([]);
            for (let j = 0; j < boardSize; j++) {
                board[i].push(0);
            }
        }
        board = placeMines(board);
        setBoard(board);
    }
    const placeMines = () => {
        let minesPlaced = 0;
        while (minesPlaced < mineNum) {
            let randomRow = Math.floor(Math.random() * boardSize);
            let randomCol = Math.floor(Math.random() * boardSize);
            if (board[randomRow][randomCol] !== -1) {
                board[randomRow][randomCol] = -1;
                minesPlaced++;
            }
        }
        return board;
    }

    // on startup, create the board then console.log it
    React.useEffect(() => {
        createBoard();
        console.log(board);
    }
    , []);

}