<template>
  <div>
    <div v-if="link === ''">
      <img :src="image" />
      <h2>{{ caption }}</h2>
      <p>{{ description }}</p>
    </div>
    <div v-if="link !== ''" @click="link">
      <img :src="image" />
      <h2>{{ caption }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caption: String,
    image: String,
    description: String,
    link: { type: String, required: true}
  }
}
</script>
