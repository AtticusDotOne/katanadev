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
    name: String, // eslint-disable-line
    image: String, // eslint-disable-line
    bio: String // eslint-disable-line
  }
}
</script>
