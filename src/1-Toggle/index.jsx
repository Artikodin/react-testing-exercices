import { useState } from 'react'

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <button onClick={() => setIsToggled(prev => !prev)}>
      Click me: {JSON.stringify(isToggled)}
    </button>
  )
}

export default Toggle
