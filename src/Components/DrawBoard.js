import * as React from 'react';
// import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

export default function DrawBoard(difficulty) {

    const createBoard = (difficulty) => {
        const boardSize = (difficulty+1) * 8;
        const mineNum = (difficulty+1) * 6;
        let board = drawBoard(boardSize);
        board = placeMines(mineNum, board);
        return(board);
    }

    const drawBoard = (boardSize) => {
        let board = [];
        for (let i = 0; i < boardSize; i++) {
            let row = [];
            for (let j = 0; j < boardSize; j++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    }

    const placeMines = (mineNum, board) => {
        let minesPlaced = 0;
        while (minesPlaced < mineNum) {
            let x = Math.floor(Math.random() * board.length);
            let y = Math.floor(Math.random() * board.length);
            if (board[x][y] !== 4) {
                board[x][y] = 4;
                minesPlaced++;
            }
        }
        return board;
    }

    const startGame = (difficulty) => {
        let gameBoard = createBoard(difficulty);
        console.log(gameBoard);
    }

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <button onClick={() => startGame(0)}>Easy</button>
                </Grid>
                <Grid item xs={4}>
                    <button onClick={() => startGame(1)}>Medium</button>
                </Grid>
                <Grid item xs={4}>
                    <button onClick={() => startGame(2)}>Hard</button>
                </Grid>
            </Grid>
        </div>
    );
    

}