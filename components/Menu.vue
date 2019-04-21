<template>
    <nav class="menu">
        <ul>
            <li v-for="item in items" :key="item.id">
                <button :id="item.id" @click="scrollto(item.href)">{{ item.label }}</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        items: { type: Array, required: true }
    },
    methods: {
        scrollto(href) {
            TweenMax.to(window, 2, { scrollTo: href, ease: Power4.easeOut })
        }
    }
}
</script>

<style>
</style>
