<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="intro-title">
                Summary
            </div>
            <div class="nextstepsoffer">Brand Identity</div>
            <div class="intro-description">
                <p>Do you feel confident about your brand’s look and feel?  A few services for better brand identity.</p>
            </div>

            <div class="offer-wrapper">
                <ul class="offer-list">
                    <li>The Starter</li>
                    <li>E-commerce Website</li>
                    <li>Logo + Animation</li>
                    <li>Brand Foundations Track</li>
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
                    <router-link to="/work-identity">Previous</router-link>
                </div>
                <div class="next page_btn">
                    <router-link to="/">Home</router-link>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SummaryIdentityComponent',
    data() {
       return {

       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
