import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const GoogleSignIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-primary w-full">
      Sign in with google
    </button>
  );
};

export default GoogleSignIn;
