// Jose Luis Jiménez Bayona - 1152384
"use client";

import { useState } from "react";

const buttonStyle = "text-5xl font-bold border-stone-950 border-1 h-20 w-20 sm:h-35 sm:w-35 bg-lime-400"
const divStyle = "flex"
const HeaderStyle = "bg-amber-500 flex flex-col items-center justify-evenly text-center w-full"
const tituloStyle = "text-4xl font-bold mt-2 mb-3"
const codigoStyle = "mb-2"
const statusStyle = "my-2 text-lg text-center"
const boardAndMoves = "flex flex-col sm:flex-row justify-evenly items-center gap-y-2"
const listStyle = "bg-lime-400 rounded-xl p-1 m-1"
const reiniciarStyle = "bg-amber-500 rounded-xl p-1 m-1"

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Ir al movimiento #' + move;
            return (
            <li className={listStyle} key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
        } else {
            description = 'Reiniciar juego';
            return (
            <li className={reiniciarStyle} key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
        }
    })

    return (
        <div>
            <div>
                <Header />
            </div>
            <div  className={boardAndMoves}>
                <div>
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div>
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
    )
}

function Board({ xIsNext, squares, onPlay }) {
    const casillasLlenas = squares.filter(Boolean).length;

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "🎉Ganador🎉: " + winner;
    } else if (!winner && casillasLlenas == 9) {
        status = "😒Empate😒";
    } else {
        status = "❕Siguiente jugador: " + (xIsNext ? "X" : "0");
    }

    return (
        <>
            <div className={statusStyle}>{status}</div>
            <div>
                <div className={divStyle}>
                    <Button value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Button value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Button value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className={divStyle}>
                    <Button value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Button value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Button value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className={divStyle}>
                    <Button value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Button value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Button value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </>
    )
}

function Header() {//Separar el tablero y los textos para aplicar estilos
    return (
        <>
            <header className={HeaderStyle}>
                <div className={tituloStyle}>Triqui</div>
                <div>Jose Luis Jiménez Bayona</div>
                <div className={codigoStyle}>1152384</div>
            </header>
        </>
    )
}

function Button({ value, onSquareClick }) {
    return (
        <button className={buttonStyle}
            onClick={onSquareClick}>{value}</button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}