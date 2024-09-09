# Notes Webapp Django React REST JWT Practice 1

## Overview

This project is a full-stack notes web application built with Django for the backend, React for the frontend, and JWT for API authorization. It allows users to manage notes through a simple, intuitive interface, using JWT for secure communication between the frontend and backend.

## Features

- **JWT Authorization**: Secure API access using JWT with Django REST Framework.
- **Add Notes**: Create new notes with titles and content.
- **View Notes**: Display a list of all notes.
- **Edit Notes**: Update the content of existing notes.
- **Delete Notes**: Remove notes from the application.

## Installation

### Backend Setup (Django)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/srikriydv/Notes-Webapp-django-react-rest-JWT-practice-1.git
   ```

2. **Navigate to the backend directory:**
   ```bash
   cd Notes-Webapp-django-react-rest-JWT-practice-1/backend
   ```

3. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

4. **Install backend dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Apply database migrations:**
   ```bash
   python manage.py migrate
   ```

6. **Run the Django development server:**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup (React)

1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Run the React development server:**
   ```bash
   npm run dev
   ```

4. **Access the application** at `http://localhost:5173/`.

## Usage

1. **JWT Authorization**: Use JWT tokens to authorize API requests.
2. **Add Notes**: Use the "Add Note" feature to create new notes.
3. **View Notes**: View a list of all notes on the main dashboard.
4. **Edit Notes**: Click on any note to update its details.
5. **Delete Notes**: Use the delete button to remove notes.

## Screenshots

Below are some screenshots of the Notes Webapp:

### Home Pages
![Notes](https://github.com/user-attachments/assets/7c66ab6e-0790-4048-ac4f-c3fede78d5fc)

### Refresh Token
![Screenshot 2024-09-09 at 4 55 39 PM](https://github.com/user-attachments/assets/7146d7d5-b13f-4afe-ace9-23bab46093b2)

### Auth in JWT
![Screenshot 2024-09-09 at 4 57 13 PM](https://github.com/user-attachments/assets/31b2b196-0135-46e7-8e48-4d714c77517f)


## API Endpoints

- **Create a note**: `POST /api/notes/`
- **Delete a note**: `notes/delete/<int:pk>/`

## Contributing

1. **Fork the repository** to your GitHub account.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit your changes** and push to the branch:
   ```bash
   git commit -m "Add your message"
   git push origin feature/your-feature
   ```
4. **Create a pull request** from your branch to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact:
- **Email**: srikri546ydv@gmail.com
- **GitHub**: [srikriydv](https://github.com/srikriydv)
