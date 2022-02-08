import { useState } from 'react'

const HiddenButton = () => {
  const [isSecondButtonDisplayed, setIsSecondButtonDisplayed] = useState(false)
  const [isHiddenTitleDisplayed, setIsHiddenTitleDisplayed] = useState(false)

  return (
    <>
      <button onClick={() => setIsSecondButtonDisplayed(true)}>
        First button
      </button>
      {isSecondButtonDisplayed && (
        <button onClick={() => setIsHiddenTitleDisplayed(true)}>
          Second button
        </button>
      )}
      <h1 style={{ color: 'red' }}>Visible title</h1>
      {isHiddenTitleDisplayed && (
        <h1 style={{ color: 'green' }}>Hidden Title</h1>
      )}
    </>
  )
}

export default HiddenButton
