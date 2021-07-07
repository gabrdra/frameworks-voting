<script>
    import Booth from './Booth.svelte'
    import Results from './Results.svelte'
    export let title = ''
    export let state = ''
    export let votes = []
    let options = retrieveOptions()
    function retrieveOptions(){
        let o = []
        votes.forEach(v => {
            o.push(v.option)
        });
        return o
    }
    function onVote(vote){
        votes.every(v => {
            if(v.option===vote.detail){
                v.count++;
                state = 'closed'
                return false;
            }
            return true;
        });
    }
</script>

<h3>{title}</h3>
{#if state === 'open'}
<Booth options = {options} on:vote={onVote}/>
{:else}
<Results votes = {votes}/>
{/if}
