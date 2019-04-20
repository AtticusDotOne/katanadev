<template>
  <div>
    <img :src="image" />
    <h2>{{ name }}</h2>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    bio: String
  }
}
</script>
