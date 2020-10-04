// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [errorMessage, setErrorMessage] = React.useState(null)
  const usernameRef = React.useRef(null)

  const handleChange = () => {
    const {value} = usernameRef.current
    const isValid = value === value.toLowerCase()

    if (isValid !== !!errorMessage) {
    }
    setErrorMessage(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(usernameRef.current.value)
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
          onChange={handleChange}
        />
      </div>
      {errorMessage && (
        <div role="alert" style={{color: 'red'}}>
          {errorMessage}
        </div>
      )}
      <button type="submit" disabled={!!errorMessage}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
