import './App.css'
import Toggle from './Toggle'
import MultiToggle from './MultiToggle'

function App() {
  return (
    <div>
      <div className='container'>
        <Toggle />
      </div>
      <div className='container'>
        <MultiToggle />
      </div>
      <div className='container'>
        <Toggle />
      </div>
      <div className='container'>
        <Toggle />
      </div>
      <div className='container'>
        <Toggle />
      </div>
    </div>
  )
}

export default App
