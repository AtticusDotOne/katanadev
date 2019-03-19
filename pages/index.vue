<template>
  <div>
    <Splash />
    <IconList :itemlist="services" />
    <TextShow :text="mission" />
    <Team :members="team" />
    <IconList :itemlist="portfolio" />
    <TextShow :text="fees" />
  </div>
</template>

<script>
import Splash from '@/components/Splash'
import IconList from '@/components/IconList'
import Team from '@/components/Team'
import TextShow from '@/components/TextShow'

export default {
  components: {
    Splash,
    IconList,
    Team,
    TextShow
  },
  data () {
    return {
      title: "Katana Dev",
      mission: [
        "Bring the latest and greatest technologies",
        "Experienced. Streamlined. Aggressive.",
        "Undercutting our competitors, overdelivering to our clients"
      ],
      services: [
        {"image": "", "caption": "Website", "description": "Develop and design a web site or web application"},
        {"image": "", "caption": "Mobile Application", "description": "Develop and design a mobile application"},
        {"image": "", "caption": "Support", "description": "Administer and maintain developed applications"},
        {"image": "", "caption": "Marketing", "description": "Promote your site or application"},
        {"image": "", "caption": "Copywriting", "description": "Draft content for your site"},
        {"image": "", "caption": "Translation", "description": "Internationalize your content"}
      ],
      team: [
        {"image": "", "name": "Samuel Bourque", "position": "Director", "bio": ""},
        {"image": "", "name": "Troy Martz", "position": "Designer", "bio": ""},
        {"image": "", "name": "Yuri Nagano", "position": "Accountant / Translator", "bio": ""}
      ],
      skillset: [
        "HTML",
        "C",
        "C++",
        "Javascript",
        "Vue.js",
        "Nuxt",
        "Cryptocurrency",
        "Smart Contracts",
        "Ethereum",
        "Solidity",
        "EOS",
        "Bitcoin",
        "Python",
        "Ruby",
        "CSS",
        "Greensock",
        "SEO"
      ],
      portfolio: [
        {"image": "", "caption": "Audit Property Management", "description": "Mobile-first web application to manage properies, tenants and every aspect of its management", "link": "www.yahoo.com"},
        {"image": "", "caption": "TZ Ninja", "description": "Mobile-first web application to manage teams across timezones", "link": "www.google.com"}
      ],
      fees: [
        "Fees are determined on a case-by-case basis",
        "Fees are generally calculated on a $200/hour basis",
        "We may consider discounts for equity stake"
      ]
    }
  }
}
</script>
