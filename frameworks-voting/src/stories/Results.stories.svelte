<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Results from "../Results.svelte";
</script>
  
<Meta
    title="Voting/Results"
    component={Results}
/>
  
<Template let:args>
    <Results {...args}/>
</Template>
  
<Story
    name="Voting1"
    args={{
        votes: [{option:'Yes', count:8}, {option:'No',count:3}]
    }}
/>
  
<Story
    name="Voting2"
    args={{
        votes: [{option:'Yes', count:8}, {option:'No', count:1}, {option:'Maybe', count:5}]
    }}
/>  