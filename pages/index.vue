<template>
    <div id="app">
        <header id="nav">
            <section>
                <nav>
                    <ul>
                        <li>
                            <a id="introBtn" href="#intro">
                                <img src="favicon-16x16.png"> Katana
                            </a>
                        </li>
                    </ul>
                </nav>
              <Menu :items="menus['topmiddle']" />
                <nav>
                    <ul>
                        <li>
                            <a id="phone" tel="+16198840677">
                                <i class="fal fa-mobile-android-alt"></i> (619) 884-0677
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
        <main id="main">
            <section id="intro" style="position:relative">
                <div>
                    <div>
                        <img src="images/logo.png">
                    </div>
                </div>
            </section>
            <section id="mission">
                <div>
                    <div>
                        <h2>The Katana Mission</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam
                            arcu, ornare vel ante non, imperdiet scelerisque turpis. Nulla
                            at enim nec erat pulvinar commodo. Maecenas eu efficitur enim,
                            eget malesuada mauris. Donec dictum odio dui, ut posuere dolor
                            aliquam quis. Vivamus at sagittis mi. Fusce nec massa lacinia,
                            sodales felis ac, aliquam orci. In commodo efficitur neque. Sed
                            sit amet maximus nulla. Morbi in scelerisque lorem, suscipit
                            fermentum sem. Etiam id ante sit amet ipsum accumsan cursus quis
                            nec turpis.
                        </p>
                    </div>
                </div>
            </section>
            <section id="services">
                <div>
                    <section>
                        <div>
                            <div>
                                <h2>Katana Services</h2>
                                <h3>Our Expertise In Software Engineering</h3>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div>
                            <div>
                                <h4>Software Automation</h4>
                                <ul>
                                    <li>Software Consulting</li>
                                    <li>End-to-end software automation</li>
                                    <li>Marketing automation</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Custom Software Development</h4>
                                <ul>
                                    <li>Software Consulting</li>
                                    <li>Full-stack software development</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Web Application Development</h4>
                                <ul>
                                    <li>A</li>
                                    <li>B</li>
                                    <li>Restful API development</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Cryptocurrencies &amp; Blockchain</h4>
                                <ul>
                                    <li>Cryptocurrency Exchanges</li>
                                    <li>Cryptocurrency Wallets</li>
                                    <li>Smart Contracts (Solidity)</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>AI &amp; Machine Learning</h4>
                                <ul>
                                    <li>A</li>
                                    <li>B</li>
                                    <li>C</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Big Data</h4>
                                <ul>
                                    <li>A</li>
                                    <li>B</li>
                                    <li>C</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Internet of Things</h4>
                                <ul>
                                    <li>A</li>
                                    <li>B</li>
                                    <li>C</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>Business Intelligence</h4>
                                <ul>
                                    <li>A</li>
                                    <li>B</li>
                                    <li>C</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>
                                    <i class="fas fa-fish"></i> Online Marketing Systems
                                </h4>
                                <ul>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Marketing Management Systems</li>
                                    <li>Social Media Management</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>
                                    <i class="fal fa-balance-scale"></i> Mobile App Development
                                </h4>
                                <ul>
                                    <li>iOS app development</li>
                                    <li>Android app development</li>
                                    <li>OS app development</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>
                                    <i class="fal fa-balance-scale"></i> Real-Time Communications
                                </h4>
                                <ul>
                                    <li>VoIP Systems</li>
                                    <li>Video Broadcasting/Streaming Systems</li>
                                    <li>Real-time Chat Applications</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h4>
                                    <i class="fal fa-balance-scale"></i> Mission-Critical Applications
                                </h4>
                                <ul>
                                    <li>Financial Trading Systems</li>
                                    <li>Banking &amp; Healthcare Software</li>
                                    <li>M</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section id="team">
                <div>
                    <div>
                        <h2>The Katana Team</h2>
                        <p>Experienced. Streamlined. Aggressive.</p>
                    </div>
                    <Team :members="team"/>
                </div>
            </section>
            <section id="portfolio">
                <div>
                    <div>
                        <h2>Portfolio</h2>
                    </div>
                    <section>
                        <div>
                            <div>
                                <figure>
                                    <img src alt>
                                </figure>
                                <h3>[Private]</h3>
                                <h4>Property Management System</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src alt>
                                </figure>
                                <h3>TZ Ninja</h3>
                                <h4>Timezone Management</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src alt>
                                </figure>
                                <h3>Cryptique</h3>
                                <h4>Cryptocurrency Exchange Arbitrage</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src alt>
                                </figure>
                                <h3>Kasai</h3>
                                <h4>Hosting Service</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src alt>
                                </figure>
                                <h3>Daimyo</h3>
                                <h4>App Management System</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <figure>
                                    <img src alt>
                                </figure>
                                <h3>Cryptique</h3>
                                <h4>Cryptocurrency Arbitrage</h4>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <section id="engage">
                <div>
                    <div>
                        <h2>Let's Do Business!</h2>
                        <p>
                            Donec efficitur dolor orci, sed mattis orci aliquam quis.
                            Maecenas porttitor convallis purus, nec luctus ligula
                            ullamcorper sit amet. Pellentesque ut ipsum accumsan, volutpat
                            turpis non, placerat sem.
                        </p>
                        <h3>Give Us a Call:</h3>
                        <h2>(619) 884-0677</h2>
                        <button>
                            <i class="fal fa-envelope"></i> Send Us An Email
                        </button>
                    </div>
                </div>
            </section>
        </main>
        <footer id="footer">
            <section>
                <div>
                    <div>
                        <p>&copy; 2019 Katana Development Services. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </footer>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/plugins/ScrollToPlugin.min.js"
        ></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/easing/EasePack.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js"></script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/debug.addIndicators.min.js"
        ></script>
        <script src="/js/jquery.js"></script>
        <script src="/js/smooth.js"></script>
        <script src="/js/scroll.js"></script>
    </div>
</template>

<script>
import Team from '@/components/Team'
import Menu from '@/components/Menu'

export default {
  components: {
    Team,
    Menu
  },
    data() {
        return {
          menus: {
            topleft: [
              {id: "introBtn", href: "#intro", label: "Katana"}
            ],
            topmiddle: [
              {id: "missionBtn", href: "#mission", label: "Mission"},
              {id: "servicesBtn", href: "#services", label: "Services"},
              {id: "teamBtn", href: "#team", label: "Team"},
              {id: "portfolioBtn", href: "#portfolio", label: "Portfolio"},
              {id: "engageBtn", href: "#engage", label: "Engage"}
            ],
          },
            title: 'Katana Software Development',
            mission: [
                'Bring the latest and greatest technologies',
                'Experienced. Streamlined. Aggressive.',
                'Undercutting our competitors, overdelivering to our clients'
            ],
            services: [
                {
                    image: '',
                    caption: 'Website',
                    description:
                        'Develop and design a web site or web application'
                },
                {
                    image: '',
                    caption: 'Mobile Application',
                    description: 'Develop and design a mobile application'
                },
                {
                    image: '',
                    caption: 'Support',
                    description:
                        'Administer and maintain developed applications'
                },
                {
                    image: '',
                    caption: 'Marketing',
                    description: 'Promote your site or application'
                },
                {
                    image: '',
                    caption: 'Copywriting',
                    description: 'Draft content for your site'
                },
                {
                    image: '',
                    caption: 'Translation',
                    description: 'Internationalize your content'
                }
            ],
            team: [
                {
                    image: 'images/yuri-nagano.png',
                    name: 'Yuri Nagano',
                    title: 'Finance',
                    bio: 'Money money money'
                },
                {
                    image: 'images/sam-bourque.png',
                    name: 'Samuel Bourque',
                    title: 'Direction',
                    bio: 'Making things work'
                },
                {
                    image: 'images/troy-martz.png',
                    name: 'Troy Martz',
                    title: 'Design',
                    bio: 'Making magic real'
                }
            ],
            skillset: [
                'HTML',
                'C',
                'C++',
                'Javascript',
                'Vue.js',
                'Nuxt',
                'Cryptocurrency',
                'Smart Contracts',
                'Ethereum',
                'Solidity',
                'EOS',
                'Bitcoin',
                'Python',
                'Ruby',
                'CSS',
                'Greensock',
                'SEO'
            ],
            portfolio: [
                {
                    image: '',
                    caption: 'Audit Property Management',
                    description:
                        'Mobile-first web application to manage properies, tenants and every aspect of its management',
                    link: 'www.yahoo.com'
                },
                {
                    image: '',
                    caption: 'TZ Ninja',
                    description:
                        'Mobile-first web application to manage teams across timezones',
                    link: 'www.google.com'
                }
            ],
            fees: [
                'Fees are determined on a case-by-case basis',
                'Fees are generally calculated on a $200/hour basis',
                'We may consider discounts for equity stake'
            ]
        }
    }
}
</script>
