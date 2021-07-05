<template>
    <div>
    <h1>{{title}}</h1>
    <Booth v-if="state === 'open'" :options = 'retrieveOptions()' @onVote="onVote"/>
    <Results v-else-if="state === 'closed'" :votes = "votes"/>
    </div>
</template>

<script>
import Booth from "./Booth"
import Results from "./Results"
export default {
    name: 'VotingCard',
    components: {Booth, Results},
    props: {
        title: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        votes: {
            type: Array,
            required: true,
        },
    },
    
  methods: {
    onVote(option) {
        this.votes.every(v => {
            if(v.option===option){
                v.count++;
                this.state = 'closed'
                return false;
            }
            return true;
        });
    },
    retrieveOptions(){
        let options = []
        this.votes.forEach(vote => {
            options.push(vote.option)
        });
        return options;
    }
}
}
</script>

<style>

</style>