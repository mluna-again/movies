# Movies API

## Run locally

### Option 1
Requirements:
* Docker
* Docker-compose

(Server will run on port 4000)
```sh
$ docker-compose up --build # this *may* need sudo
```

### Option 2
Requirements:
* MongoDB
* Node.js >= 16.14.x
* Yarn >= 1.22

The next env variables are required:
- MONGODB_URI
- PORT
- JWT_SECRET

```sh
$ yarn install
$ yarn dev
```

## Endpoints

### Users
* POST /users -> creates a user
```json
{
	"user": {
		"username": "test",
		"password": "secret123"
	}
}
```

* GET /users -> returns all users

### Login
* POST /login -> returns a JWT
```json
{
	"user": {
		"username": "test",
		"password": "secret123"
	}
}
```

### Movies
This resource is private, all request must include the header Authorization with
a JWT in order to be authenticated.

* GET /movies -> returns all movies
* GET /movies/:id -> returns a movie
* POST /movies -> creates a movie
```json
{
	"movie": {
		"title": "Lo que el agua se llevó"
	}
}
```

* PATCH /movies/:id
```json
{
	"movie": {
		"title": "Blade Runner"
	}
}
```

* DELETE /movies/:id
