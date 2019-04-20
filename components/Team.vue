<template>
  <section>
    <TeamMember v-for="(item, index) in members" :key="index"
      :image="item.image"
      :name="item.name"
      :bio="item.bio"
      :title="item.title"
    />
  </section>
</template>

<script>
import TeamMember from '@/components/TeamMember'

export default {
  components: {
    TeamMember
  },
  props: {
    members: {type: Array, required: true}
  }
}
</script>
