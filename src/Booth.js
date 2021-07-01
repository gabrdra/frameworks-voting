import React from 'react'

export default function Booth(args) {
    const options = args.options.map((option) => (
        <button
          key={option}
          onClick = {() => args.onVote(option)}
        >
          {option}
        </button>))
    return (
        <div>
            {options}
        </div>
    )
}
