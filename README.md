# KanbanFlow Skill for OpenClaw

An OpenClaw skill to interact with [KanbanFlow](https://kanbanflow.com/). This tool allows your AI agent to read the board, check tasks, and update statuses directly from the chat interface.

## Features

-   **Get Board:** Fetch the full board configuration.
-   **List Columns:** View available columns and their IDs.
-   **List Tasks:** View all tasks or filter by column.
-   **Create Task:** Add new tasks to a specific column.
-   **Move Task:** Move a task to a different column.
-   **Update Color:** Change a task's color (e.g., mark as green/Done).
-   **Delete Task:** Remove a task.

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

Run the skill via CLI:

```bash
# Get Board
node dist/index.js board

# List Columns
node dist/index.js columns

# List Tasks (All)
node dist/index.js tasks

# List Tasks (Specific Column)
node dist/index.js tasks <columnId>

# Create Task
node dist/index.js add <columnId> "Task Name" "Description" "color"

# Move Task
node dist/index.js move <taskId> <columnId>

# Update Color
node dist/index.js color <taskId> <color>

# Delete Task
node dist/index.js delete <taskId>
```

## License

ISC
