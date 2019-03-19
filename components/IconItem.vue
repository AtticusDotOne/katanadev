<template>
  <div>
    <img :src="image" />
    <h2>{{ caption }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    caption: String, // eslint-disable-line
    image: String, // eslint-disable-line
    description: String // eslint-disable-line
  }
}
</script>
