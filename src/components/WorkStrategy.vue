<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="intro-title">
                Strategy
            </div>
            <div class="intro-description">
                <p>How do you feel about your business planning and decision making?</p>

                <p>We provide consulting that helps us learn about your specific needs.  We promote collaboration + expansion.  Always global, never local.</p>
            </div>

            <div class="offer-wrapper">
                <div class="intro-title">
                    What We Offer
                </div>
                <div class="highlight-wrapper">
                    <div class="highlight">
                        <div class="highlight-title">Research + Insights</div>
                        <div class="highlight-desc">
                            This includes providing insights for your business and industry.  This is essentially a research digest of market trends, product development, new markets and better customer experiences.
                        </div>
                        <ul class="highlight-list">
                            <li>Personalized Insights for You</li>
                        </ul>
                        <div class="highlight-details">
                            <div class="highlight-details-title">Details</div>
                            <ul class="details-list">
                                <li>2 - 4 weeks</li>
                                <li>contact for pricing</li>
                            </ul>
                        </div>
                    </div>
                    <div class="highlight">
                        <div class="highlight-title">Strategy Consulting</div>
                        <div class="highlight-desc">
                            We start with our complimentary session and learn how we can work together.  We create a plan of action that provides insights, ideas and strategy for launching your next product or pivoting to a new market.
                        </div>
                        <ul class="highlight-list">
                            <li>Consulting</li>
                            <li>Plan of Action</li>
                        </ul>
                        <div class="highlight-details">
                            <div class="highlight-details-title">Details</div>
                            <ul class="details-list">
                                <li>2 - 4 weeks</li>
                                <li>Starting @ $500</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="pagination_wrapper">
            <div class="frow justify-between">
            <div class="prev page_btn">
                <router-link to="/tracks">Previous</router-link>
            </div>
            <div class="summary page_btn">
                <router-link to="/summary-strategy">Summary</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkStrategy',
    data() {
       return {

       }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
