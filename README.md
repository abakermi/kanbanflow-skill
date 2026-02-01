# KanbanFlow Skill for OpenClaw

An OpenClaw skill to interact with [KanbanFlow](https://kanbanflow.com/). This tool allows your AI agent to read the board, check tasks, and update statuses directly from the chat interface.

## Features

-   **Get Board:** Fetch the current board configuration (columns, swimlanes).
-   **List Tasks:** (Coming soon) View tasks by column.
-   **Move Tasks:** (Coming soon) Move tasks between columns.

## Installation

1.  Clone this repository:
    ```bash
    git clone https://github.com/abakermi/kanbanflow-skill.git
    ```
2.  Install dependencies:
    ```bash
    cd kanbanflow-skill
    npm install
    ```
3.  Build the project:
    ```bash
    npm run build
    ```

## Configuration

Set your KanbanFlow API token in your environment or `.env` file:

```bash
export KANBANFLOW_API_TOKEN="your-token-here"
```

## Usage

Run the skill via OpenClaw or directly with node:

```bash
node dist/index.js board
```

## License

ISC
