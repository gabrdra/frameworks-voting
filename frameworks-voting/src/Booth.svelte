<script>
    import { createEventDispatcher } from 'svelte'
    export let options = []
    const dispatch = createEventDispatcher()
    function onVote(v){
        dispatch('vote',v)
    }
</script>
{#each options as option}
<button on:click={onVote(option)}>{option}</button>
{/each}