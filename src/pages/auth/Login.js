import { useState } from "react"
import { Alert, Button, CloseButton, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import moralis from 'moralis'

// const Moralis = require('moralis')

const Login = () => {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')


  const auth = getAuth();
  const onnLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("logged in");
        const user = userCredential.user;
        console.log("user:", user)
        history.push('/explore')

        setErrorMsg('')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(error.toString())

      });
  }

  const onLogin = (event) => {
    event.preventDefault()

    moralis.User.logIn(email, password)
      .then(() => {
        setErrorMsg('')
        history.push('/explore')
      })
      .catch((err) => {
        console.error('Error signing in.', err)
        setErrorMsg(err.toString())
      })
  }

  return (
    <div>
      {errorMsg && (
        <Alert status="error">
          <Alert.Heading>Authentication has failed</Alert.Heading>
          <p display="block">{errorMsg}</p>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}

      <Form onSubmit={onnLogin}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>

      <small className="text-muted">
        Don&apos;t yet have an account?
        <a href="/auth/signup"> Sign Up</a>
      </small>
    </div>
  )
}

export default Login;