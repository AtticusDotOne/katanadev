<template>
  <div>
    <img :src="image" />
    <p>{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    caption: String, // eslint-disable-line
    image: String // eslint-disable-line
  }
}
</script>
