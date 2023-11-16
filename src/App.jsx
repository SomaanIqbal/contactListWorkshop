import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import ContactRow from './components/ContactRow.jsx';
import './App.css'


function App() {
 const [selectedContactId, setSelectedContactId] = useState(null);



  return (
    <>
    {selectedContactId? (<div>Selected Contact Id Short Message</div>) : (<ContactList setSelectedContactId={setSelectedContactId}/> )}
    
    </>
  )
}

export default App
