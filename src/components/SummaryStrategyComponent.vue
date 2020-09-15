<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="intro-title">
                Summary
            </div>
            <div class="nextstepsoffer">Strategy</div>
            <div class="intro-description">
                <p>Do you have the data needed to support your decision making? Make your next move your best move.</p>
            </div>

            <div class="offer-wrapper">
                <ul class="offer-list">
                    <li>Research + Insights</li>
                    <li>Strategy Consulting</li>
                </ul>
            </div>

            <div class="nextsteps-wrapper">
                <div class="intro-title">Next Steps</div>
                <div class="nextstepsoffer">Strategy Session</div>
                <div class="nextsteps-desc">We have a complimentary session available to learn about your goals + opportunities</div>
                <div class="schedule"><a href="http://www.calendly.com/svncrwns/svncrwns-sessions" target="_blank">Schedule w/ Us</a></div>
            </div>
            <div class="pagination_wrapper">
                <div class="frow justify-between">
                <div class="prev page_btn">
                    <router-link to="/work-strategy">Previous</router-link>
                </div>
                <div class="home page_btn">
                    <router-link to="/">Home</router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SummaryStrategyComponent',
    data() {
       return {

       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
