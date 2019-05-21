# Running instructions

**Prerequisites**: NodeJS, Postgres installed or running in a Docker container.

* open terminal
* clone this repository `git clone https://github.com/EricDosReis/go-barber-app.git`
* go to project folder `cd go-barber-app`
* install dependencies `npm i`
* connect with postgres, configs located in `src/config/database.js`
* create a database called 'gobarber' 
* run sequelize migrations `npx sequelize db:migrate`
* run `npm start`

That's all folks!
