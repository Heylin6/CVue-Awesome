<template>
<section class="mb-5">
    <h3 class="section-title" style="margin-left: 10px;">工作經歷</h3>
    <ul class="timeline">
        <li v-for="(exp,index) in experinceInfo" :key="index" class="timeline-item rounded ml-3 p-4 shadow">
            <div class="timeline-arrow"></div>
            <p class="h5 bold">{{exp.position}}</p>
            <p class="h6">{{exp.workAt}}</p>
            <span style="font-style: italic;">{{exp.duration}}</span>
            <p v-if="exp.description != null && exp.description != undefined" class="mt-2" v-html="exp.description"></p>
            <div v-if="exp.techs.length > 0">
                <span class="bold">使用工具</span>
                <ul class="tech-list pt-2">
                    <li class="tech-list-item" v-for="(tech,index) in exp.techs" :key="index">
                        <span class="badge badge-pill p-2"
                              style="background-color:#4f63ad">
                            {{tech}}                            
                        </span>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</section>
</template>

<script>
export default {
    props: {
        experinceInfo: {
            type: Object,
        }
    }
}
</script>

<style>

</style>
