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
    caption: String, // eslint-disable-line
    image: String, // eslint-disable-line
    description: String, // eslint-disable-line
    link: { type: String, required: false, default: ''} // eslint-disable-line
  }
}
</script>
