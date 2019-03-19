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
        {"image": "", "caption": "Website", "description": "Develop and design a web site or web application"},
        {"image": "", "caption": "Mobile Application", "description": "Develop and design a mobile application"},
        {"image": "", "caption": "Support", "description": "Administer and maintain developed applications"},
        {"image": "", "caption": "Marketing", "description": "Promote your site or application"},
        {"image": "", "caption": "Copywriting", "description": "Draft content for your site"},
        {"image": "", "caption": "Translation", "description": "Internationalize your content"}
      ]
    }
  }
}
</script>
