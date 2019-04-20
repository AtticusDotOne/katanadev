<template>
  <div>
    <figure>
      <img :src="image" alt>
    </figure>
    <h3>{{ name }}</h3>
    <h4>{{ title }}</h4>
    <p>{{ bio }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    image: String,
    title: String,
    bio: String
  }
}
</script>
