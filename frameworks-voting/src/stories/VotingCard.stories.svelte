<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import VotingCard from "../VotingCard.svelte";
</script>
  
<Meta
    title="Voting/VotingCard"
    component={VotingCard}
    argTypes={{
      title: '',
      state: {
        control: { type: 'radio', options: ['open', 'closed'] }
      },
      votes: [],
    }}
/>
  
<Template let:args>
    <VotingCard {...args}/>
</Template>
  
<Story
    name="Voting1"
    args={{
        title: 'Do you agree?',
        state: 'open',
        votes: [{option:'Yes', count:8}, {option:'No',count:3}]
    }}
/>
  
<Story
    name="Voting2"
    args={{
        title: 'Do you want ice cream?',
        state: 'closed',
        votes: [{option:'Yes', count:8}, {option:'No', count:1}, {option:'Maybe', count:5}]
    }}
/>  