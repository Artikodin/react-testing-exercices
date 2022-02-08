import './App.css'
import Toggle from './1-Toggle'
import MultiToggle from './2-MultiToggle'
import HiddenButton from './3-HiddenButton'
import DeferedComponent from './4-DeferedComponent'
import FormValidation from './5-FormValidation'

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
