# Playwright >=1.27.0 SharedWorker bug

## Reproduction steps

1. Clone the repo
2. `npm install && npx playwright install`
3. `npm run build`
4. `npm run serve`
5. Open the Playwright Chromium browser: `npx playwright open localhost:8080`
6. Open `chrome://inspect`, notice there is a registered SharedWorker. Do not inspect the process.
7. Open the developer console, and notice a message being printed every second. This is coming from the SharedWorker process.
8. Refresh the page
9. Notice the messages stop in the console
10. Open `chrome://inspect` again, notice the SharedWorker process is still listed.
11. Inspect the SharedWorker process.
12. Look at the main console again, notice that the console has "caught up" and the SharedWorker has started again.
