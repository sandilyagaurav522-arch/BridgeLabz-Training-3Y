# Assignment 10 — APIs and Endpoints

This project contains all 6 questions from the assignment PDF. Each question has its own `db.json` file and uses a different JSON Server port.

## Requirements
- Node.js and npm installed
- Internet connection for the jQuery and Axios CDN scripts
- JSON Server version 0.17.4 (the commands below use `npx`)

## Run the six JSON Servers

Open **six separate CMD/terminal windows**. In each window, go to the extracted project folder and run the command for that question.

| Question | Folder | Port | Command |
|---|---|---:|---|
| Q1 Live Search | `q1-live-search` | 3001 | `npx json-server@0.17.4 --watch db.json --port 3001` |
| Q2 Employee Status | `q2-employee-status` | 3002 | `npx json-server@0.17.4 --watch db.json --port 3002` |
| Q3 Task Manager | `q3-task-manager` | 3003 | `npx json-server@0.17.4 --watch db.json --port 3003` |
| Q4 Multi-API Dashboard | `q4-multi-api-dashboard` | 3004 | `npx json-server@0.17.4 --watch db.json --port 3004` |
| Q5 Timetable | `q5-timetable` | 3005 | `npx json-server@0.17.4 --watch db.json --port 3005` |
| Q6 Registration | `q6-user-registration` | 3006 | `npx json-server@0.17.4 --watch db.json --port 3006` |

For each command:
1. Open a terminal.
2. Change directory into the relevant question folder. Example:
   `cd /d "C:\path\to\API_Assignment_10\q1-live-search"`
3. Run its JSON Server command from the table.
4. Keep that terminal open while testing the question.

The first `npx` run may ask to install JSON Server. Type `y` and press Enter.

## Open the pages
Open each question's `index.html` in a browser. You can use VS Code Live Server too. Keep all required JSON Servers running.

## API endpoints used
- Q1: `GET http://localhost:3001/products?q=...`
- Q2: `GET http://localhost:3002/employees`, `PATCH http://localhost:3002/employees/:id`
- Q3: `GET http://localhost:3003/tasks?priority=...` or `?completed=true`, `PATCH http://localhost:3003/tasks/:id`
- Q4: `GET http://localhost:3004/users`, `/orders`, `/products`
- Q5: `GET http://localhost:3005/timetable?day=Monday`
- Q6: `GET http://localhost:3006/users?email=...`, `POST http://localhost:3006/users`

## Notes
- Every question has a separate `db.json` with at least five sample records.
- The Q4 dashboard first uses `Fetch + Promise.all`. If any endpoint fails, it displays the required warning and retries endpoints individually to show whichever totals are still available.
- Q6 duplicate email checking is a front-end check followed by POST. It is suitable for this learning assignment, not production-grade security or race-safe uniqueness enforcement.
- External CDN libraries require internet access.
