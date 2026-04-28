# 沉寂的古宅 — Escape Room Game

A browser-based escape room puzzle game written in pure HTML, CSS, and JavaScript — no frameworks, no build tools, no back-end required.

## About the Game

You wake up in the living room of a long-abandoned manor. The air smells of mould, candle flames flicker in the dark, and every exit is locked. Explore three rooms — the **Living Room**, the **Corridor**, and the **Study** — gather clues, crack codes, and find a way out before you're trapped forever.

### Rooms & Puzzles

| Room | Objective | Clue to find |
|------|-----------|--------------|
| 客厅 Living Room | Unlock the code box | A faded note on the wall |
| 走廊 Corridor | Open the padlock | An old newspaper + wall paintings |
| 书房 Study | Enter the final escape code | The owner's diary + an engraved chest |

### Endings

- **Normal ending** — solve all three puzzles and escape through the manor gate.
- **Bad ending** — enter the final code incorrectly three times and be imprisoned forever.

## Project Structure

```
.
├── index.html   # Game markup / room layouts
├── style.css    # Visual theme (dark manor atmosphere)
├── game.js      # All game logic, puzzles, and story text
└── README.md    # This file
```

## How to Play

Because this is a fully static site (plain HTML + CSS + JS), you can run it in any of the following ways:

### Option 1 — Open directly in a browser

Double-click `index.html`. No server needed.

### Option 2 — Serve locally with Python

```bash
# Python 3
python -m http.server 8080
```

Then open <http://localhost:8080> in your browser.

### Option 3 — Deploy to a static host

Upload the three files (`index.html`, `style.css`, `game.js`) to any static hosting service:

| Service | How |
|---------|-----|
| **GitHub Pages** | Push to a repo → Settings → Pages → Deploy from branch |
| **Netlify** | Drag-and-drop the folder onto <https://app.netlify.com> |
| **Vercel** | `vercel --prod` in the project directory |
| **Cloudflare Pages** | Connect your GitHub repo in the Cloudflare dashboard |

No configuration files are required — just the three source files.

## Educational Purpose

This project is intentionally kept as a **zero-dependency static site** to demonstrate:

- How to split a single monolithic HTML file into separate **HTML / CSS / JS** files for maintainability.
- How **vanilla JavaScript** can power interactive browser games without any framework.
- How any static hosting service can serve a complete, playable web application with no server-side code.

It makes a good starting point for learning front-end web development or experimenting with static hosting platforms.

## License

Feel free to use, modify, and share this project for learning purposes.
