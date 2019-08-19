<template>
    <div class="home-box">
        <!-- 固定的搜索框 -->
        <div class="search-box">
            <search></search>
        </div>
    </div>
</template>

<script>
import ("./home.scss")
import { getIndex } from "@/api/index";
export default {
    name: "home",
    components: {
        search: () => import("./search/search.vue")
    },
    props: {},
    data() {
        return {};
    },
    created() {
        this.init();
    },
    mounted() {},
    methods: {
        init() {
            getIndex().then(({ data }) => {
                console.log(data);
            });
        }
    },
    watch: {}
};
</script>
