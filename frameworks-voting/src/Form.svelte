<script>
    import { createEventDispatcher } from 'svelte'
    import {title} from './title.js'
    import {votes} from './votes.js'
    const dispatch = createEventDispatcher()
    
    let titleLocal = ''
    let errors = ''
    let votesLocal = [{option:'', count:0}, {option:'',count:0}]
    function addAlternative(){
        votesLocal = [...votesLocal, {option:'', count:0}]
    }
    function removeAlternative(){
        if(votesLocal.length > 2){
            votesLocal.pop()
            votesLocal = votesLocal
        }
    }
    function submit(){
        errors = ''
        if(titleLocal.trim().length<5){
            errors += "the title should have at least 5 letters. \n"
        }
        for (let i = 0; i < votesLocal.length; i++) {
            let vote = votesLocal[i]
            if(vote.option.length < 1){
                errors += "option " + (i+1) + " can not be empty. \n"
            }            
            if(vote.count < 0 || vote.count == null){
                errors += "count " + (i+1) + " can not be smaller than 0. \n"
            }
        }
        if(errors.length < 1){
            title.set(titleLocal)
            votes.set(votesLocal)
            dispatch('submit')
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
    <input bind:value={titleLocal}>
    <br>
    {#each votesLocal as vote}
        option: <input type="text" bind:value={vote.option}> count: <input type="number" bind:value={vote.count}> <br>
    {/each}
    <input type="submit" value="send">
</form>
<button on:click={addAlternative}>add alternative</button>
<button on:click={removeAlternative}>remove alternative</button>
<div class = "errors">{errors}</div>
