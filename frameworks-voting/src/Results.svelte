<script>
    import { onMount } from 'svelte';
    export let votes = []
    let sum = 0
    onMount(()=>{
        votes.forEach(v => {
            sum += v.count
        });
    })
</script>
<ol>
    {#each votes as vote}
    <li>{vote.option} - {vote.count} votes ({Math.round(100 * vote.count / sum)}%)</li>
    {/each}
</ol>