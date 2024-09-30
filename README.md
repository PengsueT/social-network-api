# social-network-api

## Description

The backend for a social network RESTful API that utilizes MongoDB, Express.js and Mongoose.

Features include create, update, and delete User and Thought, create and delete Reaction to Thought, add and delete Friend to User.

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Usage

### Api Routes

User routes: /api/users

GET all users

POST a new user using a JSON body

Example JSON body
```
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

/api/users/:userId

GET a single user by its _id and populated thought and friend data

PUT to update a user by its _id

DELETE to remove user and thoughts associated with that user by its _id

/api/users/:userId/friends/:friendId

POST to add a new friend to a user's friend list

DELETE to remove a friend from a user's friend list

Thought routes: /api/thoughts

GET to get all thoughts

POST to create a new thought using a JSON body

Example JSON body
```
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
}
```

/api/thoughts/:thoughtId

GET to get a single thought by its _id

PUT to update a thought by its _id

DELETE to remove a thought by its _id

/api/thoughts/:thoughtId/reactions

POST to create a reaction stored in a single thought's reactions array field using a JSON body

Example JSON body
```
{
  "reactionBody": "Here's a cool reaction...",
	"username": "lernantino"
}
```

DELETE to pull and remove a reaction by the reaction's reactionId value

## Credits

Virtuals [https://mongoosejs.com/](https://mongoosejs.com/docs/tutorials/virtuals.html)

MongoDB [https://www.mongodb.com/](https://www.mongodb.com/) Database to store our User and Thought document collections

mongoose [https://mongoosejs.com/](https://mongoosejs.com/) ORM interact with the MongoDB database

express [https://expressjs.com/](https://expressjs.com/) Web framework for Node.js

Node.js [https://nodejs.org/en](https://nodejs.org/en) Runtime enviroment for JavaScript applications

## Videos

[User and Thought CRUD](https://drive.google.com/file/d/1kWDtW6xh9_EkA8yHHj7UATy4sEgzj52N/view?usp=sharing)

[Friend/reaction Create and Delete](https://drive.google.com/file/d/1XbjijEP0sGwPX9ncvlruMBam20OiWylL/view?usp=sharing)
