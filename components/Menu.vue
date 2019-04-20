<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item.id">
        <a :id="item.id" :href="item.href">{{ item.label }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {type: Array, required: true}
  }
}
</script>

<style>
</style>
