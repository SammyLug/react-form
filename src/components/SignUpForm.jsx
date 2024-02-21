// 3. In your SignUpForm.jsx file, create a SignUpForm component, and ensure it is the default export. For now, you can have it render a simple h2 with a message saying, "Sign Up".
import { useState } from "react";

// Navigate back to your SignUpForm.jsx and start on the form logic. Because we are creating a 'controlled' form, we will need to store our form input values in state variables.
// 6.  At the top of your file, import the useState hook from React and create three state variables for our form inputs: username, password, and error. Their default values should be "", "" and null, respectively
function SignUpForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      username: username,
      password: password
      })
    })
    
    const result = await response.json();
    console.log(result)
    } catch(error) {
    console.log(error)
  }
  }
  return (
    <>
    <h2>Sign Up</h2>
    
    {error && <p>{error}</p>}
    
    <form onSubmit={handleSubmit}>
    <label>
      Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
    </label>

<br />
<br />

    <label>
      Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>

<br />
<br />

    <button>
      Submit
    </button>
    </form>
    </>
  )
}

export default SignUpForm 

  // 7. Underneath the h2 we previously wrote, create a form element with two inputs and a button with the text "submit" nested inside. To keep the application accessible to screen readers, make sure to nest your input tags inside a parent label tag with appropriate text.




