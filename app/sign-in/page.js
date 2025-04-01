"use client";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
//Login
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      console.log("signIn", { res });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signUp">
      <div>
        <h1>Sign In Page</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
