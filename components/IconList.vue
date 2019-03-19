<template>
  <div>
    <IconItem v-for="(item, index) in itemlist" :key="index"
    :image="item.image"
    :caption="item.caption"
    :description="item.description"
    />
  </div>
</template>

<script>
import IconItem from '@/components/IconItem'

export default {
  components: {
    IconItem
  },
  props: {
    itemlist: {type: Array, required: false, default: []}
  }
}
</script>
