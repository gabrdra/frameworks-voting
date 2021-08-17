<template>
    <div>
        <Form v-if="this.votingOpen === false" @onSubmit="onSubmit"/>
        <VotingCard v-else-if="this.votingOpen" :title = "title" :state = "votingCardState" :votes = "votes"/>
    </div>
</template>

<script>
import VotingCard from './VotingCard'
import Form from "./Form"
import store from "./store"
export default {
    name:"App",
    data: ()=>({
        votingOpen: false,
        title:'',
        votes:[],
        votingCardState: 'open'
    }),
    components: {Form, VotingCard},
    methods:{
        onSubmit(){
            this.title = store.title
            this.votes = store.votes
            this.votingOpen = true
        }
    }
}
</script>

<style>

</style>
