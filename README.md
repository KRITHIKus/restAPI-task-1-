# Event Management API

This project is a backend REST API for managing events. It allows the creation, retrieval, updating, and deletion of event data. The API also supports image uploads for event images and is connected to a MongoDB database.

## Features
- **Create an Event**: Allows users to create events with relevant details like name, description, schedule, moderator, category, sub-category, and image.
- **Retrieve Events**: Fetch event details by event ID or list all events.
- **Update an Event**: Allows updating the event details.
- **Delete an Event**: Allows deletion of an event by its ID.
- **Image Upload**: Supports image upload for event details.

## Tech Stack
- **Node.js**: JavaScript runtime used to build the backend.
- **Express**: Web framework for Node.js to create the API routes.
- **MongoDB**: NoSQL database to store event data.
- **Multer**: Middleware for handling file uploads.
- **Nodemon**: Automatically restarts the server during development.

## Project Setup

### **Steps to Clone the Repository and Set Up the Project Locally:**

1. **Clone the Repository:**
   - Clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/your-username/your-repository-name.git
     ```

2. **Navigate to the Project Directory:**
   - After cloning the repository, navigate to the project folder:
     ```bash
     cd your-repository-name
     ```

3. **Install Dependencies:**
   - Ensure you have `Node.js` and `npm` installed on your system. You can check this by running:
     ```bash
     node -v
     npm -v
     ```
   - If not installed, you can download and install Node.js from [here](https://nodejs.org/).
   
   - Install the project dependencies using `npm`:
     ```bash
     npm install
     ```

4. **Set Up Environment Variables:**
   - Create a `.env` file in the root of the project if it doesn't exist already.
   - Add your MongoDB URI to the `.env` file:
     ```text
     MONGO_URI=mongodb://localhost:27017/eventDB
     ```

   - The `.env` file contains sensitive information, so it has been added to `.gitignore` to prevent it from being pushed to GitHub.

5. **Create the Uploads Folder:**
   - If you plan to upload images, make sure the `uploads` folder is present in the root directory of the project.
   - This folder will be used to store uploaded files.
   - You can create the folder manually or with the following command:
     ```bash
     mkdir uploads
     ```

6. **Start the Server:**
   - After all the setup is complete, start the server:
     ```bash
     npm start
     ```
   - The server will be available at `http://localhost:3000`.

7. **Access the Application:**
   - You can now test the API using tools like Postman or curl.

---

### **Additional Setup (Optional)**

#### **Running the App in Development Mode (With Nodemon):**
- If you want the app to automatically restart whenever you make changes to the code, you can use `nodemon`:
  ```bash
  npm run dev
