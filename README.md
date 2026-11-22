# Animal Sudoku - Challenge Levels

Static web game for children: animal sudoku, challenge levels only.

- 6x6: 12 challenge puzzles
- 8x8: 12 challenge puzzles
- 9x9: 12 harder puzzles
- Tools: trial colours, candidate notes, undo, erase, tiered hints (each hint press adds 10 s)
- Best times and progress are stored only in this browser (localStorage). There is no server and no online leaderboard.

Not included: learning hall, tutorial, LAN leaderboard server.

## Run locally

```
python -m http.server 8000
```

Open http://localhost:8000/

## Publish with GitHub Pages

Settings -> Pages -> Build and deployment -> Source: Deploy from a branch -> Branch: main, folder: / (root).

## Status

Puzzle data was checked by script (valid, matches the puzzle, unique solution). The game has not yet been tested on a real phone or tablet.
