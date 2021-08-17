<template>
  <form on:submit|preventDefault={submit}>
    title:
    <input v-model=title>
    <br>
    <div v-for="(vote, index) in votes" :key="index">
        option: <input type="text" v-model="vote.option"> count: <input type="number" v-model="vote.count"> <br>
    </div>
    <input type="submit" @click="onSubmit" value="send">
</form>
<button @click="addAlternative">add alternative</button>
<button @click="removeAlternative">remove alternative</button>
<div style="white-space:pre">{{errors}}</div>
</template>

<script>
import store from './store'
export default {
    name:"Form",
    emits:["onSubmit"],
    data: ()=>({
        title: '',
        votes: [{option:'', count:0}, {option:'',count:0}],
        errors: ''
    }),
    methods:{
        onSubmit(e){
            e.preventDefault()
            this.errors = ''
            if(this.title.trim().length<5){
                this.errors += "the title should have at least 5 letters. \n"
            }
            for (let i = 0; i < this.votes.length; i++) {
                let vote = this.votes[i]
                if(vote.option.length < 1){
                    this.errors += "option " + (i+1) + " can not be empty. \n"
                }            
                if(vote.count < 0 || vote.count == null){
                    this.errors += "count " + (i+1) + " can not be smaller than 0. \n"
                }
            }
        if(this.errors.length < 1){
            store.title = this.title
            store.votes = this.votes
            this.$emit('onSubmit')
        }
        },
        addAlternative(){
        this.votes = [...this.votes, {option:'', count:0}]
        },
        removeAlternative(){
        if(this.votes.length > 2){
            this.votes.pop()
        }
    }
    }
}
</script>

<style>

</style>