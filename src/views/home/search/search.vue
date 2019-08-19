<template>
    <div class="searchModule-box">
        <!-- 信息框 -->
        <div class="search-info" @click="searchInfoClick">
            <van-goods-action-icon class="iconfont icon-6" info="." />
        </div>
        <!-- 输入框 -->
        <div class="search-input">
            <input type="text" placeholder="请输入关键字" />
            <div class="search-icon">
                <i class="iconfont icon-sousuo-copy"></i>
            </div>
        </div>
        <!-- 扫码 -->
        <div class="search-saoma">
            <i class="iconfont icon-scancode"></i>
        </div>

        <!-- 消息弹出框 -->
        <van-popup
            v-model="searchInfoPopup"
            position="right"
            :style="{ height: '100%', width: '100%' }"
            :duration="0.4"
        >
            <div class="searchInfoPopup-box">
                <!-- 头部 -->
                <div class="searchInfoPopup-head">
                    <div class="searchInfo-back" @click="searchInfoBackBtn">
                        <van-icon name="arrow-left" />
                        <span>消息通知</span>
                    </div>
                    <div class="searchInfo-clear">
                        <i class="iconfont icon-qingkong"></i>
                    </div>
                </div>
                <!-- 内容 -->
                <div class="searchInfoPopup-content">
                    <div class="content">
                        <div class="card">
                            <!-- 物流 -->
                            <div class="wuliu" @click="InfoPopupCard('交易物流')">
                                <img src="../../../assets/images/wuliu.png">
                                <p>交易物流</p>
                            </div>
                            <!-- 通知 -->
                            <div class="tongzhi" @click="InfoPopupCard('服务通知')">
                                <img src="../../../assets/images/tongzhi.png">
                                <p>服务通知</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </van-popup>

        <!-- 消息弹出框  点击交易物流或者服务通知卡片 -->
        <van-popup
            v-model="searchInfoPopupCard"
            position="right"
            :style="{ height: '100%', width: '100%' }"
            :duration="0.4"
        >
            <div class="searchInfoPopup-box">
                <!-- 头部 -->
                <div class="searchInfoPopup-head">
                    <div class="searchInfo-back" @click="searchInfoCardBackBtn">
                        <van-icon name="arrow-left" />
                        <span>{{searchInfoPopupCard_Title}}</span>
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
import("./search.scss");
export default {
    name: "search",
    components: {},
    props: {},
    data() {
        return {
            // 消息弹出框
            searchInfoPopup: false,
            /** 点击交易物流或者服务通知卡片 */
            // 点击交易物流或者服务通知卡片
            searchInfoPopupCard: false,
            // 消息弹出框 title
            searchInfoPopupCard_Title: ""
            /** 点击交易物流或者服务通知卡片 */
        };
    },
    created() {},
    mounted() {},
    methods: {
        // 信息框点击事件
        searchInfoClick() {
            this.searchInfoPopup = true;
        },
        // 消息框的弹出框 点击返回事件
        searchInfoBackBtn() {
            this.searchInfoPopup = false;
        },
        /** 点击交易物流或者服务通知卡片 */
        // 消息框的弹出框 卡片的点击事件 
        InfoPopupCard(card) {
            this.searchInfoPopupCard = true
            this.searchInfoPopupCard_Title = card
        },
        // 点击返回事件
        searchInfoCardBackBtn () {
            this.searchInfoPopupCard = false
        }
        /** 点击交易物流或者服务通知卡片 */
    },
    watch: {}
};
</script>
