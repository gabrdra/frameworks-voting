<script>
    import VotingCard from './VotingCard.svelte'
    import {title} from './title.js'
    import {votes} from './votes.js'
    import Form from './Form.svelte'
    let votingOpen = false
    let bundle
    function submitForm(){
        votingOpen = true
        bundle = {title: $title, state: 'open', votes: $votes}
    }
</script>
{#if votingOpen === false}
<Form on:submit={submitForm}/>
{:else}
<VotingCard title={bundle.title} state={bundle.state} votes={bundle.votes}/>
{/if}