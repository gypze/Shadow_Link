# Shadow_Link
## Description

This project is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Built using Express.js, MongoDB, and Mongoose, this API is designed to handle large amounts of unstructured data efficiently.

This project showcases my skills in building backend applications, focusing on database modeling and API route handling. Below, you will find details on how to set up, use, and test the application.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)
- [Author](#author)
- [Links](#links)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gypze/Shadow_Link.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Shadow_Link
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## Usage

Use a tool like Insomnia or Postman to interact with the API. The available routes are documented below.

1. Start the application by running the command `npm start`.
2. Use the endpoints under `/api/users` and `/api/thoughts` to interact with users, thoughts, reactions, and friends.

---

## Features

- **User Management**: Create, update, and delete users; add and remove friends.
- **Thoughts**: Create, read, update, and delete thoughts.
- **Reactions**: Add and remove reactions to thoughts.
- **Virtual Properties**: Automatically calculate `friendCount` and `reactionCount`.
- **Timestamp Formatting**: Format `createdAt` timestamps using a getter method.

---

## API Routes

### Users

- **GET /api/users**: Get all users.
- **GET /api/users/:id**: Get a user by ID with populated thought and friend data.
- **POST /api/users**: Create a new user.
- **PUT /api/users/:id**: Update a user by ID.
- **DELETE /api/users/:id**: Delete a user by ID (bonus: removes associated thoughts).

### Friends

- **POST /api/users/:userId/friends/:friendId**: Add a friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId**: Remove a friend from a user's friend list.

### Thoughts

- **GET /api/thoughts**: Get all thoughts.
- **GET /api/thoughts/:id**: Get a thought by ID.
- **POST /api/thoughts**: Create a new thought.
- **PUT /api/thoughts/:id**: Update a thought by ID.
- **DELETE /api/thoughts/:id**: Delete a thought by ID.

### Reactions

- **POST /api/thoughts/:thoughtId/reactions**: Add a reaction to a thought.
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**: Remove a reaction from a thought.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Insomnia** (for testing)

---

## Screenshots

![Screenshot of the Social Network API in action]("C:\Users\Gypze\OneDrive\Pictures\Screenshots\Shadow Link.png")C:

---

## Author

**Gypze**

I’m an aspiring junior developer currently completing a full-stack development bootcamp. My interests include cats, video games, heavy metal music, and creating meaningful software solutions. I’m passionate about continuous learning and improving my skills to make an impact in the tech world.

---

## Links

- [GitHub Repository](https://github.com/gypze/Shadow_Link)
- [Walkthrough Video](https://youtu.be/UQ6FineFdIg)
