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
                <Menu :items="menus['topmiddle']"/>
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
                        <img src="images/logo.svg">
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
                    <Services :services="services"/>
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
import Services from '@/components/Services'

export default {
    components: {
        Team,
        Menu,
        Services
    },
    data() {
        return {
            menus: {
                topleft: [{ id: 'introBtn', href: '#intro', label: 'Katana' }],
                topmiddle: [
                    { id: 'missionBtn', href: '#mission', label: 'Mission' },
                    { id: 'servicesBtn', href: '#services', label: 'Services' },
                    { id: 'teamBtn', href: '#team', label: 'Team' },
                    {
                        id: 'portfolioBtn',
                        href: '#portfolio',
                        label: 'Portfolio'
                    },
                    { id: 'engageBtn', href: '#engage', label: 'Engage' }
                ]
            },
            services: [
                {
                    icon: 'fal fa-balance-scale',
                    title: 'Software Automation',
                    items: [
                        'Software Consulting',
                        'End-to-end software automation',
                        'Marketing automation'
                    ]
                },
                {
                    icon: 'fal fa-balance-scale',
                    title: 'Custom Software Development',
                    items: [
                        'Software Consulting',
                        'Full-stack software development',
                        'Progressive Web Applications'
                    ]
                },
                {
                    icon: 'fal fa-balance-scale',
                    title: 'Web Application Development',
                    items: [
                        'Progressive Web Applications',
                        'Responsive User Experience',
                        'Appealing and Adaptive Designs'
                    ]
                },
                {
                    icon: 'fal fa-balance-scale',
                    title: 'Cryptocurrencies & Blockchain',
                    items: ['Trading Systems', 'Analytics', 'Feed Aggregators']
                },
                {
                    icon: 'fal fa-balance-scale',
                    title: 'Mobile App Development',
                    items: [
                        'Progressive Web Applications',
                        'iOS App Development',
                        'Android App Development'
                    ]
                },
                {
                    icon: 'fas fa-fish',
                    title: 'Online Marketing Systems',
                    items: [
                        'Search Engine Optimization',
                        'Marketing Management Systems',
                        'Social Media Management'
                    ]
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
