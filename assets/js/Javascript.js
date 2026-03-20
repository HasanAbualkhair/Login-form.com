 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
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

  /* Make reset password function */

function resetPassword(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if(!email) {
        alert("Enter your email address to reset your password.");
        return;
    }

  sendPasswordResetEmail(auth, email)
    .then(() => { 
        alert("Password reset email sent. Check your email.");
    })
    .catch((error) => {
        alert(error.message);
  });

}