import { useState } from "react"
import { initializeApp } from "firebase/app"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

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

  const connectAuth = () => {
    // connect to our firebase project
    const app = initializeApp(firebaseConfig)
    // connect to Auth
    return getAuth(app)
  }

  const handlelogin = async () => {
    const auth = connectAuth()
    const user = await signInWithEmailAndPassword(auth, email, password).catch(
      (err) => alert(err.message)
    )
    if (user) {
      console.log(user.user)
      setIsLoggedIn(true)
    }
  }

  const handleGoogleLogin = async ()=>{
    const auth = await connectAuth()
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup(auth, provider)
    .catch(err => alert(err.message))
    if(user){
        console.log(user.user)
        setIsLoggedIn(true)
    }
  }

  const handleSignUp = async () => {
    const auth = connectAuth()
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
    <form onSubmit={(e) => e.preventDefault()}>
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
      <button onClick={handlelogin}>Login</button>&nbsp;
      <button onClick={handleSignUp}>Sign Up</button>
      <br />
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </form>
  )
}
