# Forest Base Template

This is a basic template for getting up and running with [Forest](http://www.forestadmin.com/).

## Getting Started

First thing you'll want to do is actually create a project on Forest Admin.

1. Clone down this project using one of the following:
  * `git clone git@github.com:BrandonRomano/forest-base-template.git`
  * `git clone https://github.com/BrandonRomano/forest-base-template.git`
2. `npm i`
3. Create a PostgreSQL database
4. `cp .env.sample .env`
5. Fill out your `.env` file
  * `PORT` is the port this server will run on
  * `DATABASE_CONNECTION_STRING` is the connection string to your PostgreSQL database
  * `FOREST_AUTH_SECRET` is a secure password that you pick (can be anything!)
  * `FOREST_ENV_SECRET` the value of this will come at step 9
6. Navigate over to https://app.forestadmin.com, and login.
7. After you are logged in, go to `Add a new project`
8. Pick the `Express/Sequelize` stack
9. Set the `FOREST_ENV_SECRET` in your `.env` file that is provided in the generated code
10. run `npm start`
11. Click the `Check Install` button
12. Give your project a name
13. Press Save
14. Login using your ForestAdmin account password
