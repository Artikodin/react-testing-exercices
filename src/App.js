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
        <div className='title'>1-Toggle</div>
        <Toggle />
      </div>
      <div className='container'>
        <div className='title'>2-MultiToggle</div>
        <MultiToggle />
      </div>
      <div className='container'>
        <div className='title'>3-HiddenButton</div>
        <HiddenButton />
      </div>
      <div className='container'>
        <div className='title'>4-DeferedComponent</div>
        <DeferedComponent />
      </div>
      <div className='container'>
        <div className='title'>5-FormValidation</div>
        <FormValidation />
      </div>
    </div>
  )
}

export default App
