<template>
    <div class="wrap">
        <div class="header">
            <button class="back"></button>
            <span>历史心情指数</span>
        </div>
        <div class="user_mood">
            <div class="user">
                <img :src=imgurl>
                <span class="user_name">{{name}}</span>
            </div>
            <div class="mood_index_average">{{averageNumber}}</div>
            <div class="mood_index_text">周平均心情指数</div>
        </div>
       <template slot-scope="{ mooditems }">
            <MoodItem
                v-for="item in items"
                :key="item.week"
                :mood-value="item.value"
            />
        </template>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { MoodItem } from './MoodItem.vue'

export default {
    components:{
        MoodItem
    }
    data(){
        return {
            name:"李强",
            mooditems:[
                {'六': 86},
                {'日': 80},
                {'一': 25},
                {'二': 90},
                {'三': 92},
                {'四': 97},
                {'五': 81}
            ],
            imgurl:''
        }
    },
    computed: {
        averageNumber(){
            const allmood = Object.values(this.mooditems).reduce((a,b)=>{a+b})
            return allmood/7
        }
    }
}
</script>
<style scoped>
.wrap{
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 90.18%;
    background: #FFFFFF;
}
.header {
    position: absolute;
    width: 390px;
    height: 32px;
    margin-left: 14px;
    margin-right: 14px
    top: 56px;
    .back {
        position: absolute;
        width: 23.5px;
        height: 17px;
        left: calc(50% - 23.5px/2 + 0.25px);
        top: calc(50% - 17px/2);
        border: 3px solid #2D2F33;
    }
    .span {
        position: absolute;
        width: 119px;
        height: 28px;
        left: 148px;
        top: 56px;
        font-family: 'PingFang HK';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.3px;
    }
}
.user img{
    position: absolute;
    width: 36px;
    height: 36px;
    left: 163px;
    top: 152px;
    background: url(.png);
}
.user_mood {
    position: absolute;
    width: 390px;
    height: 399px;
    left: 12px;
    top: 106px;
    background: #FFFFFF;
    box-shadow: 0px -6px 16px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
}
.user_name {
    position: absolute;
    left: 50.97%;
    right: 39.37%;
    top: 17.41%;
    bottom: 79.46%;
    font-family: 'PingFang HK';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #2D2F33;
}
.mood_index_average {
    position: absolute;
    width: 87px;
    height: 98px;
    left: 164px;
    top: 192px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 800;
    font-size: 72px;
    line-height: 98px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: #2D2F33;
}
.mood_index_text {
    position: absolute;
    width: 125px;
    height: 25px;
    left: 145px;
    top: 285px;
    font-family: 'PingFang HK';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.3px;
    color: #929292;
}
</style>
