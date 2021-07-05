<template>
    <div>
    <h3>{{title}}</h3>
    <Booth v-if="this.currentState === 'open'" :options = 'retrieveOptions()' @onVote="onVote"/>
    <Results v-else-if="this.currentState === 'closed'" :votes = "votes"/>
    </div>
</template>

<script>
import Booth from "./Booth"
import Results from "./Results"
export default {
    name: 'VotingCard',
    data: ()=>({
        currentState: ''
    }),
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
                this.setCurrentState('closed')
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
    },
    setCurrentState(s){
        this.currentState = s
    }
    },
    watch: {
        state: function(){
            this.setCurrentState(this.state)
        }
    },
    created: function () {
      this.currentState = this.state
    },
}
</script>

<style>

</style>