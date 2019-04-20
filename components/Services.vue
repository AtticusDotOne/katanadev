<template>
  <section>
    <div v-for="(service, x) in services" :key="x">
      <div>
        <h4>
          <i :class="service.icon" /> {{service.title}}
        </h4>
        <ul>
          <li v-for="(item, y) in service.items" :key="y">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    services: {type: Array, required: true}
  }
}
</script>

<style>
</style>
