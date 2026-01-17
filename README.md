# Weekly Journal for Thymer

A [Thymer](https://thymer.com) plugin that displays your journal pages side by side in a weekly or 3-day view.

## Features

- **7-Day View** - See your entire week's journal entries at a glance
- **3-Day View** - Focused view showing yesterday, today, and tomorrow
- **Properties Display** - Shows journal properties (Sleep, Lunch, Dinner, Exercise, etc.)
- **Full Content** - Headings, tasks, lists, nested items
- **Week Navigation** - Browse previous/next weeks
- **Today Highlighting** - Current day is visually highlighted

## Screenshots

- **7 Day View:**
<img width="3324" height="1650" alt="CleanShot 2026-01-17 at 05 53 32@2x" src="https://github.com/user-attachments/assets/6ac94db2-3f00-4f42-a13e-2fb3fc66bb80" />

- **3 Day View:**
<img width="3330" height="1528" alt="CleanShot 2026-01-17 at 05 52 29@2x" src="https://github.com/user-attachments/assets/db9e995f-942a-4bb7-b3a7-4a37b13e93f8" />


## Installation

1. In Thymer, open the **Command Palette** (Cmd/Ctrl + K)
2. Search for **"Plugins"** and select it
3. Click **"Create Global Plugin"**
4. Give it a name (e.g., "Weekly Journal")
5. Click **"Edit Code"**
6. Copy the contents of [`plugin.js`](plugin.js) into the **Code** field
7. Copy the contents of [`plugin.json`](plugin.json) into the **Configuration** field
8. Click **Save**

The plugin will appear in your sidebar.

## Usage

- Click **"Weekly Journal"** in the sidebar to open the view
- Use **7 Day** / **3 Day** buttons to toggle between views
- Use **Prev** / **Next** to navigate between weeks
- Click **Today** to jump back to the current week

## Known Limitations
- View only for now - cannot edit text
- Cannot currently navigate to the journal page on click

## Requirements

- Thymer with a "Journals" collection (the default journal)

## License

MIT
