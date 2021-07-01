import React from 'react';
import Booth from './Booth';

export default function VotingCard(args) {
    const options = args.votes.map(vote => (vote.option));
    return (
        <div>
            <h3>{args.title}</h3>
            <Booth options = {options} onVote = {onVote}/>
        </div>
    );
    function onVote(key){
        args.votes.every(vote => {
            if(vote.option === key){
                //console.log(vote.count);
                vote.count++;
                //console.log(vote.count);
                return false;
            }
            return true;
        });
    }
}