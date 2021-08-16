import React, {useState} from 'react'
import VotingCard from './VotingCard'
import Form from './Form'
import DataContext from './Data'
function App() {
  const [votingOpen, setvotingOpen] = useState(false)
  const [globaltitle, setglobaltitle] = useState("")
  const [globalvotes, setglobalvotes] = useState([{option:'', count:0}, {option:'',count:0}])
  let openState = 'open'
  function submit(){
    setvotingOpen(true)
    
  }
  return (
      <dir>
        <DataContext.Provider value={{globaltitle, setglobaltitle, globalvotes, setglobalvotes}}>
        {votingOpen ? <VotingCard title = {globaltitle} state = {openState} votes = {globalvotes} ></VotingCard> : <Form submit = {submit}></Form>}
        </DataContext.Provider>
      </dir>
  );
}

export default App;
