# Tiendanube Aggregator

## Changes made by [me](https://github.com/LautiLosio)
- Added fields `available` and `inventoryLevel` to the product object.
- Added a new endpoint to get the products that are available.
- Added query parameters to filter the products by `available` and `inventoryLevel`.
- Expanded `sort` query parameter to allow sorting by `inventoryLevel`.

### TODO
- [ ] Create a github action / cron to run the scraper and update the data in the database.
- [ ] Create a script connected to a Telegram bot to notify when the availability of a subscribed product changes.
- [ ] Create a script connected to a Telegram bot to notify when a new product is available.

@Author: [sebasfavaron](https://github.com/sebasfavaron)

### How to run
1. Clone the repository
2. Go into the different directories and run `npm install`
3. Run `npm start` in the subdirectories in the following order:
    1. `./scraper`
    2. `./api`
    3. `./frontend` this one uses `npm run dev` instead of `npm start`
4. Open your browser and go to `localhost:3000` to see if the backend is running
5. Open your browser and go to `localhost:5173` to see if the frontend is running

Check it out already working [here](https://shopping-arg.netlify.app/)! Feel free to suggest improvements or raise bugs via the Issues tab

### Description
The general idea for this proyect is to have an automatic way of parsing clothing brand's websites and display all sold items in a single website that allows for easy grouping and comparison by value, type, etc.

### Limitations
Only supports sites built with tiendanube for now.

### Upcoming plans:
- automate data updates (ex. new items, change in prices)
- support shopify sites
