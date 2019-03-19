<template>
  <div>
    <splash />
    <IconList />
  </div>
</template>

<script>
import Splash from '@/components/Splash'
import IconList from '@/components/IconList'

export default {
  components: {
    Splash,
    IconList
  },
  data () {
    return {
      title: "Katana Dev"
    }
  }
}
</script>
