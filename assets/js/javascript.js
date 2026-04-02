  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDMLZjTa815ZcR9HAfiPlholGoMeBNxWMM",
    authDomain: "login-form-172a8.firebaseapp.com",
    projectId: "login-form-172a8",
    storageBucket: "login-form-172a8.firebasestorage.app",
    messagingSenderId: "83521978944",
    appId: "1:83521978944:web:61f097112880ea83e615a5"
  };

   // Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


window.handleLogin = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    const errorText = document.getElementById('error-message');

    //signIn method with email and password

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Login successful:", userCredential.user);

            errorText.textContent = ""; // Clear any previous error messages

            if (rememberMe) {
                localStorage.setItem("rememberMe", "true");
                localStorage.setItem("savedEmail", email);
            } else {
                localStorage.removeItem("rememberMe");
                localStorage.removeItem("savedEmail");
            }

            alert("Successfully logged in!");
          })
            // SUCCESS: Send them to your home/dashboard page
            
    
       
            // FAILURE: Show the error on the card
  
        .catch((error) => {
            console.log(error);
            errorText.style.color = "rgba(172, 53, 53, 0.644)";
            errorText.textContent = "Invalid email or password.";
        });
    };

    // Handle "Forgot Password" click

    window.handleForgotPassword = function() {
        const email = document.getElementById('email').value;
        const errorMessage = document.getElementById('error-message');

    if (!email) {
        errorMessage.style.color = "rgba(172, 53, 53, 0.644)";
        errorMessage.textContent = "Please enter your email.";
        return;
    }

    // send password reset email

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            errorMessage.style.color = "rgba(11, 47, 81, 0.991";
            errorMessage.textContent = "Successfully sent to email.";
        })
        .catch(() => {
            // Handle errors here.
            console.log();
            errorMessage.style.color = "rgba(172, 53, 53, 0.644)";
            errorMessage.innerText = "Error sending reset email.";
        });
};

// Remember Me functionality

window.addEventListener("load", () => {
    const isRemembered = localStorage.getItem("rememberMe");
    const savedEmail = localStorage.getItem("savedEmail");

    if (isRemembered === "true") {
        document.getElementById("remember-me").checked = true;
        document.getElementById("email").value = savedEmail || "";
    }
});


// Password visibility toggle

const password = document.querySelector('#password');
const togglePassword = document.querySelector('#eye');

togglePassword.addEventListener('click', function () {
  const isPassword = password.type === 'password';
  password.type = isPassword ? 'text' : 'password';
  
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});