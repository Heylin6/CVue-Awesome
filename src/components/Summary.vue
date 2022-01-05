<template>
<section class="mb-5">
    <h3 class="section-title">關於我</h3>
    <span>{{summaryInfo}}</span>
</section>
</template>

<script>
export default {
    props:{
        summaryInfo:{
            type: String
        }
    }
}
</script>

<style>

</style>
