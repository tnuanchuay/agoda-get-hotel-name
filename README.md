# agoda-get-hotel-name

## prerequisite
- nodejs
- yarn

## Usage
- in the agoda.spec.ts, change `await page.goto('https://www.agoda.com/search?city=2570');` to some search page that you want to get captured.
- yarn playwright test
- hotel name will be print out in console (stdout)
