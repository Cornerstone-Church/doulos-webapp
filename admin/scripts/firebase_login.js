// Firebase Auth variable
var auth = firebase.auth();

// Will log the user in
function signIn(email, password, errorElement) {
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        window.open('./editor/', '_self');
    }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);

        switch (errorCode) {
            case "auth/invalid-email":
                errorElement.innerHTML = "Wrong email and/or password";
                break;
            case "auth/wrong-password":
                errorElement.innerHTML = "Wrong email and/or password";
                break;
            default:
                errorElement.innerHTML = "Unknown error has happened";
                break;
        }
    });
}


function signOut() {
    auth.signOut().then(() => {
        // Do nothing on sign out
    }).catch((error) => {
        console.error("There was a problem login out the user: " + error);
    })
}

function isAuth() {
    var isSignedIn = false;
    auth.onAuthStateChanged((user) => {
        if (user) {
            isSignedIn = true;
        } else {
            isSignedIn = false;
        }
    })
    return isSignedIn
}