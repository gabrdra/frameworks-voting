<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Form from "../Form.svelte";
</script>

<Meta
    title="Voting/Form"
    component={Form}
/>
  
<Template let:args>
    <Form  {...args}/>
</Template>
  
<Story
    name="Example"
/>