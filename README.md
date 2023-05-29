# 1. ProjectHub

ProjectsHub is a web application built with React.js, Semantic UI, ASP.NET, and SQLite data source. It provides a user-friendly interface for managing projects, allowing users to perform CRUD operations, assign team members, and implement user authentication.

# 2. Features

1. Create, Read, Update, Delete (CRUD) Projects: Users can create new projects, view existing projects, update project details, and delete projects as needed.
2. Team Member Assignment: Users can assign team members to projects.
3. User Authentication: The application incorporates user authentication to ensure secure access and protect project data. For this task ASP.NET Core Identity, this is a package that comes with .net SDK at run time. For the authentication, because I'm using a web api, it is typical to use JWT Tonet Authentication.
   Front-end Development with React.js: The front-end of the application is built using React.js, providing a modern and responsive user interface.
   Styling with Semantic UI: Semantic UI is used for styling the application, offering a sleek and intuitive design.
   Back-end Development with ASP.NET: The back-end of the application is developed using ASP.NET, providing a robust and scalable foundation.
   Data Storage with SQLite: The application utilizes SQLite as the data storage solution, enabling efficient data management and retrieval.

# 3. Installation

1. Clone the repository: git clone https://github.com/your/repository.git
   Navigate to the project directory: cd project-directory

2. Install the dependencies:
   2.1. For the front-end, navigate to the client directory and run npm install.
   2.2. For the back-end, navigate to the server directory and run dotnet restore.
3. Configure the database:
   3.1. Update the connection string in the back-end's appsettings.json file to point to your SQLite database.
   3.2. Run the database migration command: dotnet ef database update to create the necessary tables.
4. Start the application:
   4.1. For the front-end, navigate to the client directory and run _npm start_.
   4.2. For the back-end, navigate to the server directory and run dotnet run.
   ##### _Note: Make sure you have Node.js, npm, and the .NET SDK installed on your machine._

# 4. Usage

Access the application by visiting http://localhost:3000 in your web browser.
Register a new user account or log in with an existing account.
Create projects, assign team members, and perform CRUD operations on projects as needed.
Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.
Below you can find a short video demonstrating the working application.

<https://watch.screencastify.com/v/Kvd2fB9ZWqgvgE8l51on>

# 6. Tech Stuck

1. React.JS 18
2. Semantic-UI
3. MobX
4. React Router
5. ASP.NET Core
6. Microsoft Identity
7. Axios
8. Formik
9. CQRS Pattern - Command and Query Responsibility Segregation

# 5. Contact

For any inquiries or questions, you can reach out to the project maintainer:

Name: Aleksander Prifti
Email: prifti.aleksandri@gmail.com
Feel free to contact me for any further information or support.
