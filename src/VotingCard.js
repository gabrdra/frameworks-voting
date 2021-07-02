import React, {useEffect, useState} from 'react';
import Booth from './Booth';
import Results from './Results';

export default function VotingCard(args) {
    const [state, setState] = useState(args.state);
    const options = args.votes.map(vote => (vote.option));
    useEffect(()=>{
        if(state !== args.state){
            setState(args.state)
        }
    }, [args.state])
    let votingBooth = <Booth options = {options} onVote = {onVote}/>
    if(state === 'closed'){
        votingBooth = <Results{...args} />
    }
    return (
        <div>
            <h3>{args.title}</h3>
            {votingBooth}
        </div>
    );
    function onVote(key){
        args.votes.every(vote => {
            if(vote.option === key){
                //console.log(vote.count);
                vote.count++;
                //console.log(vote.count);
                setState('closed');
                return false;
            }
            return true;
        });
    }
}