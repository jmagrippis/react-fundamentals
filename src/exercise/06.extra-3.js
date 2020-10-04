// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const usernameRef = React.useRef(null)

  const handleChange = () => {
    const {value} = usernameRef.current
    setUsername(value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          type="text"
          ref={usernameRef}
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
