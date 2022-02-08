import { useState } from 'react'

const MultiToggle = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <>
      <button onClick={() => setIsToggled(prev => !prev)}>Click me</button>
      <button>Don't click me</button>
      <p>
        Result:{' '}
        <span style={{ color: 'green' }}>{JSON.stringify(isToggled)}</span>
      </p>
    </>
  )
}

export default MultiToggle
