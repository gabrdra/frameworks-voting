<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    let title = ''
    let errors = ''
    let votes = [{option:'', count:0}, {option:'',count:0}]
    function addAlternative(){
        votes = [...votes, {option:'', count:0}]
    }
    function removeAlternative(){
        if(votes.length > 2){
            votes.pop()
            votes = votes
        }
    }
    function submit(){
        errors = ''
        if(title.trim().length<5){
            errors += "the title should have at least 5 letters. \n"
        }
        for (let i = 0; i < votes.length; i++) {
            let vote = votes[i]
            if(vote.option.length < 1){
                errors += "option " + (i+1) + " can not be empty. \n"
            }            
            if(vote.count < 0){
                errors += "count " + (i+1) + " can not be smaller than 0. \n"
            }
        }
        if(errors.length < 1){
            dispatch('submitForm',votes)
        }
    }
</script>
<style>  
    .errors {
      white-space: pre;
    }
    </style>
<form on:submit|preventDefault={submit}>
    title:
    <input bind:value={title}>
    <br>
    {#each votes as vote}
        option: <input type="text" bind:value={vote.option}> count: <input type="number" bind:value={vote.count}> <br>
    {/each}
    <input type="submit" value="send">
</form>
<button on:click={addAlternative}>add alternative</button>
<button on:click={removeAlternative}>remove alternative</button>
<div class = "errors">{errors}</div>
