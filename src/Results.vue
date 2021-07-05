<template>
  <div>
      <ol>
          <li v-for="vote in votes" :key = "vote.option">{{vote.option}} - {{vote.count}} votes</li>
      </ol>
  </div>
</template>

<script>
export default {
    name: 'Results',
    props: {
    votes: {
        type: Array,
        required: true,
    },
  },
}
</script>

<style>

</style>