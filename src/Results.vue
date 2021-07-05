<template>
  <div>
      <ol>
          <li v-for="vote in votes" :key = "vote.option">{{vote.option}} - {{vote.count}} votes ({{Math.round(100 * vote.count / sum)}}%)</li>
      </ol>
  </div>
</template>

<script>
export default {
    name: 'Results',
    data: ()=>({
        sum: 0
    }),
    props: {
    votes: {
        type: Array,
        required: true,
    },
  },
  methods: {
      sumOfVotes() {
          let sum = 0
          this.votes.forEach(v => {
              sum += v.count
          });
          return sum
      }
  },
  created: function () {
      this.sum = this.sumOfVotes()
  },
  updated: function () {
      this.sum = this.sumOfVotes()
  },
}
</script>

<style>

</style>