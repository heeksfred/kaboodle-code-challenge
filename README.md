# README

This repo is the code challenge for Kaboodle.
* It consists of three docker containers:
	- An Express server hosting the API
	- A MySQL database to hold all event data
	- A React application to provide the front-end

## How do I get set up?

From the top level of the repo, simply execute
```shell
docker-compose build
```
Which will create and build the docker images

```shell
docker-compose up
```
Which will bring up the three Docker containers, hosting the images.

The api will be running on localhost:5000
The database will be running on localhost:3306
The application can then be accessed from localhost:3000

The services can then be stopped with CTRL+C

### Database

The database is a MySQL database, running on localhost port 3306, and contains
all the data that the application needs.

There is a single table called events, which holds event data. It is pre-populated
with some test data when the Docker image is built.

The database is just for demonstration purposes to no consideration has been given to 
normalisation or indexing for performance.

### API

The API is a very simple API consisting of an Express server listening for routes.
It will be hosted on localhost port 5000 and can be accessed from localhost:5000
The following endpoints are provided:

GET /version			- Returns the version of the API

GET /events				- Retrieves all events from the events table

GET /tickets/:eventID	- Retrieves all ticket allocations for an event with ID eventID

POST /events			- Creates a new event
```json
{
	"eventName": "Name of event",
	"startDate": "YYYY-MM-DD",
	"endDate": "YYYY-MM-DD",
	"eventDescription": "Description of event"
}
```

PUT /events/:eventID	- Updates an event with ID eventID
```json
{
	"eventName": "Name of event",
	"startDate": "YYYY-MM-DD",
	"endDate": "YYYY-MM-DD",
	"description": "Description of event"
}
```

DELETE /events/:eventID		- Deletes the event with ID eventID

The API can be tested with the following command:
```shell
pnpm run test
```

Note - The database should be running as the tests will run against the actual database.
This can be started with the following command:
```shell
docker-compose up database
```
and then stopped with CTRL+C

### Application

The application is a React application which will be hosted on localhost:8000
The app doesn't use Redux or Hooks as it is fairly simple so it just uses local state where necessary.

There is some data pre-loaded in to the database so when an event is selected, ticket data will be displayed.
For new events added, no ticket data will be available.

### Considerations

#### API

The unit tests for the API are all set to run sequentially, which is not best practice, but for such a small API
I decided to do this to avoid having to duplicate events re-creation for the update and delete tests.

Also, the tests use the actual database to test against, rather than mocking the requests.
Since everything is running locally, I thought that using the actual DB was reasonable.

There is no authentication or authorisation on the API, also the CORS is open to any access.

#### Application

The application is a fairly basic React app with no bells or whistles. It's not pretty, but it works!
I've only had 3 evenings working on this so haven't had time to properly refince the app and add some
niceties, but I didn't want to spend too long on it.


