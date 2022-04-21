<template>
    <div class="mood_item" :one-day="key">
        <div class="mood_item_value" :style-height="itemHeight">
            <div v-if="moodvalue>80" class="mood_item_high"></div>
            <div v-else-if="moodvalue<80||moodvalue>50" class="mood_item_common"></div>
            <div v-else-if="moodvalue<50" class="mood_item_low"></div>
        </div>
        <div class="mood_item_day">{{key}}</div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default {
    props:{
        key:{
            type: String,
            required: true
        },
        moodvalue:{
            type: Number,
            required: true
        }
    },
    computed:{
        itemHeight(){
            return (this.moodvalue/100)*280+'px'
        }
    }
}
</script>
<style scoped>
.mood_item_value{

    .mood_item_high {
        width:
        background-color:orangered
    }
    .mood_item_common {
        background-color:green
    }
    .mood_item_low {
        background-color:gray
    }        
}

</style>
