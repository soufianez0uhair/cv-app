import {useState} from 'react'
import Header from './components/Header'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Work from './components/Work'
import Footer from './components/Footer'

function App() {
  const [info, setInfo] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      qualification: '',
      school: '',
      schStartDate: '',
      schEndDate: '',
      job: '',
      employer: '',
      jobStartDate: '',
      jobEndDate: '',
      description: ''
  })
  
  const [preview, setPreview] = useState(false)

  function handleChange(e) {
    const {name, value} = e.target;
    setInfo(prevInfo => {
      return {
        ...prevInfo,
        [name]: value
      }
    })
  }

  function handleClick() {
    setPreview(preview => !preview)
  }

  return (
    <div className="App">
      <Header />
      <div className="infos">
        <GeneralInfo {...info} handleChange={handleChange} preview={preview} />
        <Education {...info} handleChange={handleChange} preview={preview} />
        <Work {...info} handleChange={handleChange} preview={preview} />
        <div className="btn">
          <button onClick={handleClick}>{preview ? 'Edit' : 'preview'}</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
