import { useState } from "react"
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCv1KE5oGJtLYOHCDfxMgHMXChJ8aL7kME",
  authDomain: "first-login-jv.firebaseapp.com",
  projectId: "first-login-jv",
  storageBucket: "first-login-jv.appspot.com",
  messagingSenderId: "483788916464",
  appId: "1:483788916464:web:a6c61e22d79f380b35a435",
}

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async () => {
    // connect to our firebase project
    const app = initializeApp(firebaseConfig)
    // connect to Auth
    const auth = getAuth(app)
    //send email & password to firebase auth
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((err) => alert(err.message))
    // if all ok then set
    if (user) {
        console.log(user)
      setIsLoggedIn(true)
    }

    // if error
    //popup error
  }
  return (
    <form action="">
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="you@there.com"
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
      </label>
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
    </form>
  )
}
