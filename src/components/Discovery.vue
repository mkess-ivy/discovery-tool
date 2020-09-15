<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="intro-title">
                About your business
            </div>
            
            <div class="data-collection">
                <div class="group">
                    <div class="group-question">Are you an artist or business?</div>
                    <select v-model="clienttype">
                        <option disabled value="">Who are you?</option>
                        <option>An Artist</option>
                        <option>A Business</option>
                    </select>
                </div>
                <div class="group">
                    <div class="group-question">Do you communicate consistently with your audience?</div>
                    <select v-model="question_audience">
                        <option disabled value="">Yes or no?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div class="group">
                    <div class="group-question">Do you have a website to sell products and services?</div>
                    <select v-model="question_website">
                        <option disabled value="">Yes or no?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div class="group">
                    <div class="group-question">Do you have systems that help you manage your clients and operation?</div>
                    <select v-model="question_systems">
                        <option disabled value="">Yes or no?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="pagination_wrapper">
            <div class="frow justify-between">
            <div class="prev page_btn">
                <router-link to="/">Previous</router-link>
            </div>
            <div class="next page_btn">
                <router-link to="/tracks">Next</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Discovery',
    data() {
       return {
           clienttype: '',
           question_audience: '',
           question_systems: '',
           question_website: ''
       }
   },
    methods: {
        prevStep: function() {
            this.step--;
        },
        nextStep: function() {
            this.step++;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.data-collection {
    // margin-top:20px;
}
.group {
    padding:0 0 25px;
}
.group-question  {
    font-size:20px;
    padding-bottom:7px;
}
select {
    color: $brown ;
    text-align: center;
    margin: auto;
    border-bottom:0;
    font-size:24px;
    height:45px;
    display:block;
    width:300px;
    text-align-last: center;
}


</style>
