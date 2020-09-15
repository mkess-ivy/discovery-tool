<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="intro-title">
                About your business
            </div>
            <div class="intro-description">
                We break our services down into 4 different categories.  Please select one to get started.
            </div>
            <div class="work-wrapper">
                <ul class="work-list">
                    <li><router-link to="/work-identity">Brand Identity</router-link></li>
                    <li><router-link to="/work-efficiency">Organization + Efficiency</router-link></li>
                    <li><router-link to="/work-strategy">Strategy</router-link></li>
                    <li><router-link to="/work-mgmt">Management</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Work',
    data() {
       return {
           
       }
   }
}
</script>
<style lang="scss">
    .work-wrapper {
        padding: 50px 0;

        .work-list {
            list-style: none;
            margin:0;
            padding-inline-start:0;

            li {
                font-size: 36px;
                font-weight: lighter;
                padding-bottom: 40px;

                a {
                    color: $white;
                }
            }
        }
    }
    
</style>