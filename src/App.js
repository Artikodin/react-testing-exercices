import './App.css'
import Toggle from './1-Toggle'
import MultiToggle from './MultiToggle'
import HiddenButton from './HiddenButton'
import DeferedComponent from './DeferedComponent'
import FormValidation from './FormValidation'

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
        <HiddenButton />
      </div>
      <div className='container'>
        <DeferedComponent />
      </div>
      <div className='container'>
        <FormValidation />
      </div>
    </div>
  )
}

export default App
