<template>
    <div>
        <b-navbar toggleable="lg" fixed="top" type="dark" variant="dark" class="py-3 px-4">
            <!-- <b-navbar-brand href="#" v-html="data.menu.brand"></b-navbar-brand> -->
            <router-link class="nav-link navbar-brand" to="/" v-html="data.menu.brand"></router-link>
            <b-navbar-toggle target="nav-collapse">
                <span class="">
              <!-- plus icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </span>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <span v-for="item in data.menu.menu_links" :key="item.id">
                    <b-nav-item :href="item.link">
                        {{item.text}}
                    </b-nav-item>
                </span>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import data from '@/frontaid/frontaid.content.json'

export default {
    name: 'NavComponent',
    data() {
        return {
            data: data
        }
    }
}
</script>