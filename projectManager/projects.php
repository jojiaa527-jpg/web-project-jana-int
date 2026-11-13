<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View All Projects</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <nav>
            <a href="index.html">Home</a>
            <a href="add_project.html">Add Project</a>
            <a href="projects.php">View Projects</a>
            <a href="about.html">About Us</a>
        </nav>
    </header>

    <main class="container">
        <h1>View All Projects</h1>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>Website Design</td>
                    <td>Create the user interface for the project manager application.</td>
                    <td>In Progress</td>
                    <td><a href="#">Edit</a></td>
                    <td><a href="#">Delete</a></td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Database Setup</td>
                    <td>Prepare the database structure for storing project records.</td>
                    <td>To Do</td>
                    <td><a href="#">Edit</a></td>
                    <td><a href="#">Delete</a></td>
                </tr>
            </tbody>
        </table>
    </main>

</body>
</html>