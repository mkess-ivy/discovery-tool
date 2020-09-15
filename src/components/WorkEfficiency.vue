<template>
    <div class="frow centered-column">
        <div class="wrapper">
            <div class="intro-title">
                Organization + Efficiency
            </div>
            <div class="intro-description">
                <p>Is your business organized?</p>
                <p>Structure is the key for providing great customer service and building customer retention.</p>
            </div>

            <div class="offer-wrapper">
                <div class="intro-title">
                    What We Offer
                </div>
                <div class="highlight-wrapper">
                    <div class="highlight">
                        <div class="highlight-title">The Efficiency</div>
                        <div class="highlight-desc">
                            This focuses on business operations and includes providing strategy and design for the following:
                        </div>
                        <ul class="highlight-list">
                            <li>Business Dashboard</li>
                            <li>CRM for Client Management</li>
                            <li>Designing System</li>
                        </ul>
                        <div class="highlight-details">
                            <div class="highlight-details-title">Details</div>
                            <ul class="details-list">
                                <li>4 - 6 weeks</li>
                                <li>Starting @ $1500</li>
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
                <router-link to="/summary-efficiency">Summary</router-link>
            </div>
            </div>
        </div>
    </div>   
</template>
<script>
    export default {
    name: 'WorkEfficiency',
    data() {
       return {

       }
   }
}
</script>

<style lang="scss"></style>