CALIBER — LOCAL SETUP & BOOTSTRAP LEDGER
======================================

GOAL
----
Get a bare-bones, visible, working UI scaffold with Git + VS Code.
No backend assumptions.
No perfection.
Just something we can SEE, RUN, and ITERATE on.


ENVIRONMENT CONFIRMED
---------------------
- OS: Windows 11
- Editor: Visual Studio Code
- Terminal: Git Bash (MINGW64 inside VS Code)
- Git Version: 2.52.0.windows.1
- No cloud deployment yet
- No backend yet
- UI-first, function visibility first


FOLDER LOCATION
---------------
Desktop\caliber


FOLDER STRUCTURE (CURRENT)
--------------------------
caliber/
│
├─ public/
│  └─ index.html
│
├─ src/
│  ├─ app.js
│  │
│  ├─ ui/
│  │  └─ ui.js
│  │
│  ├─ state/
│  │  └─ state.js
│  │
│  └─ diagnostics/
│     └─ diagnostics.js
│
└─ README.md


WHAT EACH PART IS (PLAIN ENGLISH)
---------------------------------
public/index.html
- What the browser loads
- The thing you actually SEE

src/app.js
- The entry point
- Wires everything together

src/ui/ui.js
- Buttons, panels, text
- What the user interacts with

src/state/state.js
- What the system “knows” right now
- Simple memory, nothing fancy

src/diagnostics/diagnostics.js
- Internal visibility
- Tells us what functions are running and when


GIT — STATUS CHECK COMMANDS
---------------------------
Run these ONLY inside Git Bash (MINGW64), not PowerShell.

Check Git version:
git --version

Initialize repo (only once, if needed):
git init

Check current status:
git status


BASIC LOCAL TEST (NO SERVER)
----------------------------
You do NOT need npm, node, or anything else yet.

To see the UI:
1. Open public/index.html
2. Right-click → Open with Chrome
3. If the page loads, you’re good


RULES FOR THIS PHASE
-------------------
- No backend yet
- No frameworks yet
- No refactors
- No optimizations
- UI visibility > correctness
- One function returning something is a win


MENTAL CHECKPOINT
-----------------
If you can:
- Open the folder in VS Code
- See files in Explorer
- Open index.html in Chrome
- Edit a file and refresh the browser

Then:
YOU ARE SUCCESSFULLY BOOTSTRAPPED.


NEXT (NOT NOW)
--------------
- Add visible UI elements
- Wire UI → state → diagnostics
- Make ONE function report back
- Observe, adjust, repeat

Nothing else matters yet.