<template>
    <div>
    <button
        v-for="option in options"
        :key="option"
        @click="$emit('onVote', option)"
        >{{ option }}</button>
    </div>
</template>

<script>
export default {
    name: 'Booth',
    props: {
    options: {
        type: Array,
        required: true,
    },
  },
}
</script>

<style>

</style>