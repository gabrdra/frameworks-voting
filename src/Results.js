import React from 'react';

export default function Results(args) {
    let sum = 0;
    args.votes.forEach(element => {
        sum += element.count;
    });
    const results = args.votes.map((vote) => (
        <li key = {vote.option}>{vote.option} - {vote.count} votes ({Math.round(100 * vote.count / sum)}%)</li>
        ))
    return (
        <div>
            <ol>
                {results}
            </ol>
        </div>
    )
}
