# **Project Overview**

This project is a REST API built with Node.js, Express, and MongoDB. It allows users to create, retrieve, update, and delete events, with the ability to upload images related to the events. The events are stored in a MongoDB database, and the uploaded images are saved locally in an "uploads" folder.

### **Key Functionalities:**
1. **Create Event:** 
   - Users can create an event by sending a `POST` request to `/events`. The event includes details such as the name, tagline, description, schedule, moderator, category, sub-category, rigor rank, and attendees. 
   - The event can also include an image, which is uploaded to the server.

2. **Get Event by ID:**
   - Users can retrieve an event by its unique ID via a `GET` request to `/events/:id`. This returns the details of a specific event, including its image URL.

3. **Get Latest Events:**
   - Users can retrieve a list of the latest events via a `GET` request to `/events`. This will return the most recently created events stored in the database.

4. **Update Event:**
   - Users can update the details of an event by sending a `PUT` request to `/events/:id`. The request can include updated data for the event and optionally an updated image.

5. **Delete Event:**
   - Users can delete an event by sending a `DELETE` request to `/events/:id`. This will remove the event from the database.

---

### **Dependencies Installed and Their Uses:**

1. **Express**:
   - **Purpose**: Express is a fast, unopinionated, minimalist web framework for Node.js. It's used to handle HTTP requests and routing in this project. It simplifies the creation of routes and middleware for the application.
   - **Installation**: `npm install express`
   
2. **Multer**:
   - **Purpose**: Multer is a middleware for handling `multipart/form-data`, which is primarily used for uploading files. In this project, it's used to handle image uploads associated with events. Images are stored in the `uploads/` directory on the local system.
   - **Installation**: `npm install multer`

3. **MongoDB**:
   - **Purpose**: MongoDB is a NoSQL database used to store the events in this project. MongoDB allows for flexible storage of event details, which may vary across different events.
   - **Installation**: `npm install mongodb`
   
4. **Busboy**:
   - **Purpose**: Busboy is a fast body parser for handling file uploads. It's used by Multer to handle the `multipart/form-data` format for file uploads in this project.
   - **Installation**: `npm install busboy`

5. **Dotenv**:
   - **Purpose**: The dotenv package is used to load environment variables from a `.env` file into `process.env`. This is useful for storing sensitive data, such as MongoDB URI, and other configuration details that shouldn't be hardcoded into the project files.
   - **Installation**: `npm install dotenv`

6. **Nodemon**:
   - **Purpose**: Nodemon is a development tool that automatically restarts the Node.js server whenever there are changes to the code. This improves productivity by eliminating the need to manually restart the server after every code change.
   - **Installation**: `npm install --save-dev nodemon`

7. **Cors**:
   - **Purpose**: CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts web applications running at one origin to request resources from a different origin. In this project, CORS middleware is used to enable cross-origin requests from the client-side.
   - **Installation**: `npm install cors`

---

### **Project Structure:**
1. **`server.js`**: 
   - The entry point for the application. It sets up the server, connects to MongoDB, and starts listening for requests.
   
2. **`routes/`**:
   - Contains the API routes for handling different operations related to events. The routes include creating, updating, deleting, or retrieving events.
   
3. **`controllers/`**:
   - Contains the logic for handling API requests. Each controller function processes the data and interacts with the database to create, update, delete, or retrieve events.

4. **`config/`**:
   - Contains configuration files, such as the database connection setup (`db.js`) and environment variable management using `.env`.

5. **`uploads/`**:
   - This folder stores the images uploaded for each event.

---

### **How to Use the API:**

1. **Clone the repository**:
   ```bash
   git clone <repository-link>
> **Note:** Do **not** share the actual MongoDB URI in public repositories, as it can contain sensitive information like your database credentials.
