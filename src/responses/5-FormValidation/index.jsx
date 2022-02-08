import { useState } from 'react'

const FormValidation = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    setFullName(`${firstName} ${lastName}`)
  }

  return (
    <>
      <h1>{fullName}</h1>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='fname'>First name:</label>
        <br />
        <input
          type='text'
          id='fname'
          name='fname'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor='lname'>Last name:</label>
        <br />
        <input
          type='text'
          id='lname'
          name='lname'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

export default FormValidation
