<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import App from "../App.svelte";
</script>

<Meta
    title="Voting/App"
    component={App}
/>
  
<Template let:args>
    <App {...args}/>
</Template>
  
<Story
    name="Example"
/>