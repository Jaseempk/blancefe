import { useState } from "react"
import { Alert, Button, CloseButton, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import moralis from 'moralis'
import { app } from "./firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();


  const onnSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("userCredential:", user);
        history.push('/marketplace');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const onSignUp = (event) => {
    event.preventDefault()

    const user = new moralis.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);

    user.signUp()
      .then(() => {
        setErrorMsg('')
        history.push('/marketplace')
      })
      .catch((err) => {
        console.error('Error signing up', err)
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

      <Form onSubmit={onnSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>


        <Form.Group controlId="formBasicPassword">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} aria-describedby="passwordHelpBlock" />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and
            must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>

        <Button type="submit" >Sign Up</Button>
      </Form>

      <small class="text-muted">
        Already have an account?
        <a href="/auth/login"> Login</a>
      </small>
    </div>
  );
}

export default SignUp;