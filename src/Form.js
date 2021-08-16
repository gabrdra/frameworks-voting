import React, {useState, useContext} from 'react'
import DataContext from './Data'

export default function Form(args) {
    const {globaltitle, setglobaltitle, globalvotes, setglobalvotes} = useContext(DataContext)
    const [errors, seterrors] = useState("")
    const [title, settitle] = useState("")
    const [votes, setvotes] = useState([{option:'', count:0}, {option:'',count:0}])
    const voteChangedOption = (index, data)=>{
        let localVotes = [...votes]
        localVotes[index].option = data
        setvotes(localVotes)
    }
    const addAlternative = ()=>{
        let localVotes = [...votes, {option:'', count:0}]
        setvotes(localVotes)
    }
    const removeAlternative = ()=>{
        if(votes.length >2){
            let localVotes = [...votes]
            localVotes.pop()
            setvotes(localVotes)
        }
    }
    const alternatives = votes.map((vote, index) =><div key={index}>
        option: <input type="text" value={vote.option} onChange={(e)=>voteChangedOption(index, e.target.value)}/>
        <br/></div>)
    const onSubmit = (e)=>{
        e.preventDefault()
        let errorsLocal = ''
        if(title.trim().length<5){
            errorsLocal += "the title should have at least 5 letters. \n"
        }
        for (let i = 0; i < votes.length; i++) {
            let vote = votes[i]
            if(vote.option.length < 1){
                errorsLocal += "option " + (i+1) + " can not be empty. \n"
            }
        }
        seterrors(errorsLocal)
        if(errorsLocal.length < 1){
            setglobaltitle(title)
            setglobalvotes(votes)
            args.submit()
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                title:
                <input value={title} onChange={(e)=>settitle(e.target.value)}/>
                <br/>
                <div>
                    {alternatives}
                </div>
                <input type="submit"/>
            </form>
            <button onClick={addAlternative}>add alternative</button>
            <button onClick={removeAlternative}>remove alternative</button>
            <div style={{ whiteSpace: 'pre' }}>{errors}</div>
        </div>
    )
}

