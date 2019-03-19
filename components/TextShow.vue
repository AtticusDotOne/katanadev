<template>
  <div>
    <p v-for="(line, index) in text" :key="index">{{ line }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {type: Array, required: true, default: ["[Nothing to show]"]}
  }
}
</script>
