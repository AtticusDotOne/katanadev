<template>
  <div>
    <TeamMember v-for="(item, index) in members" :key="index"
    :image="item.image"
    :name="item.name"
    :bio="item.bio"
    />
  </div>
</template>

<script>
import TeamMember from '@/components/TeamMember'

export default {
  components: {
    TeamMember
  },
  props: {
    members: {type: Array, required: false, default: []}
  }
}
</script>
