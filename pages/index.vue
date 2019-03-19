<template>
  <div>
    <splash />
    <IconList :itemlist="services" />
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
      title: "Katana Dev",
      services: [
        {"image": "", "caption": "Website"},
        {"image": "", "caption": "Mobile Application"},
        {"image": "", "caption": "Business Process"},
        {"image": "", "caption": "Rapid Prototyping"},
        {"image": "", "caption": "Automation"},
        {"image": "", "caption": "White Labeling"},
        {"image": "", "caption": "Technology"},
        {"image": "", "caption": "Legal"},
        {"image": "", "caption": "Marketing"},
        {"image": "", "caption": "Public Relations"},
        {"image": "", "caption": "Copywriting"},
        {"image": "", "caption": "Translation"}
      ]
    }
  }
}
</script>
