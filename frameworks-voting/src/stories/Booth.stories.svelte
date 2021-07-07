<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Booth from "../Booth.svelte";
</script>
  
<Meta
    title="Voting/Booth"
    component={Booth}
/>
  
<Template let:args>
    <Booth {...args}/>
</Template>
  
<Story
    name="Yes No"
    args={{
        options: ["yes", "no"]
    }}
/>
  
<Story
    name="Yes No Maybe"
    args={{
        options: ["yes", "no", "maybe"]
    }}
/>  