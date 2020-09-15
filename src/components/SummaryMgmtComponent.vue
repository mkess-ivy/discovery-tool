<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="selection">
                <div class="select-title">You Selected</div>
                <div class="select-response">Management</div>
            </div>
            <div class="about">
                <div class="intro-title">
                    About Your Business
                </div>
                <ul class="about-list">
                    <li>You are {{ clienttype }}</li>
                    <li>who has an audience</li>
                    <li>with a website</li>
                    <li>and needs management</li>
                </ul>
            </div>
            <div class="services">
                <div class="intro-title">
                    Services
                </div>
                <div class="intro-description">
                    <p>We’re in this together.  We believe in collaboration and know it takes a team to make all the pieces work well.  Let’s talk about what’s possible. Here are our services:</p>
                </div>
                <div class="offer-wrapper">
                    <ul class="offer-list">
                        <li>The Activation</li>
                        <li>Management Plans</li>
                    </ul>
                </div>
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
                    <router-link to="/work-mgmt">Previous</router-link>
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
    name: 'SummaryMgmtComponent',
    data() {
       return {

       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
