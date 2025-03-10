// Function for Login
function login(event, userType) {
    event.preventDefault();

    let username, password;

    // Get username and password based on user type
    if (userType === 'student') {
        username = document.getElementById('studentUsername').value;
        password = document.getElementById('studentPassword').value;

        // Check if the registration number is numeric
        if (!/^\d+$/.test(username)) {
            alert('Registration number must be numeric.');
            return;
        }
    } else if (userType === 'teacher') {
        username = document.getElementById('teacherUsername').value;
        password = document.getElementById('teacherPassword').value;
    }

    // Check if both username and password are filled
    if (username && password) {
        alert('Login successful!');
        // Redirect to another website (for example)
        window.location.href = 'https://codepen.io/pen'; // Change this to your desired URL
    } else {
        alert('Please enter both username and password.');
    }
}

// Function to toggle Student Login display
function showStudentLogin() {
    document.getElementById('studentLogin').style.display = 'block';
    document.getElementById('teacherLogin').style.display = 'none';
    document.getElementById('homeSection').style.display = 'block'; // Keep Home section visible
    document.getElementById('aboutSection').style.display = 'none'; // Hide About section
}

// Function to toggle Teacher Login display
function showTeacherLogin() {
    document.getElementById('teacherLogin').style.display = 'block';
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('homeSection').style.display = 'block'; // Keep Home section visible
    document.getElementById('aboutSection').style.display = 'none'; // Hide About section
}

// Function to handle the menu toggle
function myMenuFunction() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Function to toggle Student password visibility
function toggleStudentPassword() {
    const passwordField = document.getElementById('studentPassword');
    const toggleIcon = document.getElementById('toggleStudentPassword');

    // Toggle password visibility
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show the password
        toggleIcon.classList.remove('bx-hide');
        toggleIcon.classList.add('bx-show');
    } else {
        passwordField.type = 'password'; // Hide the password
        toggleIcon.classList.remove('bx-show');
        toggleIcon.classList.add('bx-hide');
    }
}

// Function to toggle Teacher password visibility
function toggleTeacherPassword() {
    const passwordField = document.getElementById('teacherPassword');
    const toggleIcon = document.getElementById('toggleTeacherPassword');

    // Toggle password visibility
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // Show the password
        toggleIcon.classList.remove('bx-hide');
        toggleIcon.classList.add('bx-show');
    } else {
        passwordField.type = 'password'; // Hide the password
        toggleIcon.classList.remove('bx-show');
        toggleIcon.classList.add('bx-hide');
    }
}

// Function to show About Section
function showAbout() {
    document.getElementById('aboutSection').style.display = 'block';
    document.getElementById('homeSection').style.display = 'none'; // Hide Home section
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('teacherLogin').style.display = 'none';
}

// Function to show Home Section
function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('teacherLogin').style.display = 'none';
}

// Function to show Login Options
function showLoginOptions() {
    // Hide the instruction section and show the login options
    document.getElementById("instructionSection").style.display = "none";
    document.getElementById("homeSection").style.display = "block"; // Keep Home section visible
}

// Function to show Student Login page and close About page
function showStudentLoginAndCloseAbout() {
    // Close the About Section
    document.getElementById('aboutSection').style.display = 'none';

    // Show the student login and keep the Home page visible
    showStudentLogin();
}

// Function to show Teacher Login page
function showTeacherLoginAndCloseAbout() {
    // Close the About Section
    document.getElementById('aboutSection').style.display = 'none';

    // Show the teacher login and keep the Home page visible
    showTeacherLogin();
}
  // Show Forgot Password Modal
        function showForgotPassword() {
            // Hide the student login form and show the modal
            document.getElementById('studentLogin').style.display = 'none';
            document.getElementById('forgotPasswordModal').style.display = 'flex';
        }

        // Close Forgot Password Modal and return to Student Login page
        function closeForgotPasswordModal() {
            // Close the modal
            document.getElementById('forgotPasswordModal').style.display = 'none';

            // Show the student login form again
            document.getElementById('studentLogin').style.display = 'block';
        }
        // Function to show Forgot Password Modal
function showForgotPassword() {
    // Hide the student login form and show the modal
    document.getElementById('studentLogin').style.display = 'none';
    document.getElementById('forgotPasswordModal').style.display = 'block';
}

// Function to close Forgot Password Modal and return to Student Login page
function closeForgotPasswordModal() {
    // Close the modal
    document.getElementById('forgotPasswordModal').style.display = 'none';

    // Show the student login form again
    document.getElementById('studentLogin').style.display = 'block';
}
