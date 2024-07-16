
# Project Title: Restaurant

## Description



## Features

- User authentication (login, registration)
- User profile management (view and edit profile)
- Order history tracking
- Responsive design


## Technologies Used

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/yourprojectname.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd yourprojectname
   ```

3. **Install the backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Install the frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
     ```
     MONGO_URI=your_mongo_db_uri
     JWT_SECRET=your_jwt_secret
     ```
## Underconstruction components
- Profile Page
- Orders History Page
- Special offers Page
  


## Running the Project

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend application:**
   ```bash
   cd ../frontend
   npm start
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` for the frontend.

## API Endpoints

- **POST /api/auth/login**
  - Login a user.
  - Request Body: `{ "email": "user@example.com", "password": "yourpassword" }`
  
- **GET /api/auth/profile**
  - Get the user profile (requires authentication).
  
- **PUT /api/auth/profile**
  - Update the user profile (requires authentication).
  - Request Body: `{ "username": "newusername", "email": "newemail@example.com", "mobile": "newnumber", "address": "newaddress", "location": "newlocation" }`
  
- **GET /api/orders**
  - Fetch the user's order history (requires authentication).

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes. 

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

