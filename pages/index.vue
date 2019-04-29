<template>
    <div id="app">
        <header id="nav">
            <section>
                <nav>
                    <ul>
                        <li>
                            <button @click="openmenu">
                                <i class="fal fa-bars"></i>
                            </button>
                        </li>
                        <li>
                            <button id="introBtn" @click="scrollto('#intro')">
                                <img src="~/assets/images/icon.svg">
                                <b>Katana</b>
                            </button>
                        </li>
                    </ul>
                </nav>
                <Menu :items="menus['topmiddle']"/>
                <nav>
                    <ul>
                        <li>
                            <button id="email" tel="+16198840677">
                                <i class="fas fa-mobile-alt"></i>
                            </button>
                        </li>
                        <li>
                            <button id="email" href="mailto:info@katanadev.com">
                                <i class="fas fa-envelope"></i>&nbsp;Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
        <main id="main">
            <section id="intro" style="position:relative">
                <div>
                    <div>
                        <img src="~/assets/images/logo.svg">
                    </div>
                </div>
            </section>
            <section id="mission">
                <div>
                    <div>
                        <h2>The Katana Mission</h2>
                        <ul>
                            <li>To produce high quality software that empowers our clients' business</li>
                            <li>To deliver under-budget and ahead-of-schedule--every time</li>
                            <li>To raise the bar for user experience in every industry</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="services">
                <div>
                    <section>
                        <div>
                            <div>
                                <h2>Katana Services</h2>
                                <h3>Our Expertise in Software Development</h3>
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
                        <h3>Experienced. Streamlined. Aggressive.</h3>
                    </div>
                    <Team :members="team"/>
                </div>
            </section>
            <section id="engage">
                <div>
                    <div>
                        <h2>Become our client</h2>
                        <p>We engage clients at all levels. We give no-nonsense quotes and delivery schedules that we commit without fail.</p>
                        <p>Let's start a conversation. We look forward to leveling up your business edge.</p>
                    </div>
                </div>
            </section>
        </main>
        <footer id="footer">
            <section>
                <div>
                    <div>
                        <p>&copy; 2019 Katana Development</p>
                    </div>
                </div>
            </section>
        </footer>
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
                topmiddle: [
                    { id: 'missionBtn', href: '#mission', label: 'Mission' },
                    { id: 'servicesBtn', href: '#services', label: 'Services' },
                    { id: 'teamBtn', href: '#team', label: 'Team' },
                    { id: 'engageBtn', href: '#engage', label: 'Engage' }
                ]
            },
            services: [
                {
                    icon: 'fal fa-network-wired',
                    title: 'Software Automation',
                    items: [
                        'Infrastructure Automation',
                        'Hands-off Maintenance',
                        'Streamlined Operations'
                    ]
                },
                {
                    icon: 'fal fa-balance-scale',
                    title: 'Custom Software Development',
                    items: [
                        'General Software Consulting',
                        'Code Audits',
                        'Technology Feasibility Study'
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
                    image: '/images/yuri-nagano.png',
                    name: 'Yuri Nagano',
                    title: 'Finance',
                    bio: 'Making it count'
                },
                {
                    image: '/images/sam-bourque.png',
                    name: 'Samuel Bourque',
                    title: 'Direction',
                    bio: 'Making things work'
                },
                {
                    image: '/images/troy-martz.png',
                    name: 'Troy Martz',
                    title: 'Design',
                    bio: 'Making magic real'
                }
            ]
        }
    },
    methods: {
        scrollto(href) {
            TweenMax.to(window, 2, { scrollTo: href, ease: Power4.easeOut })
        }
    },
    openmenu() {}
}
</script>
