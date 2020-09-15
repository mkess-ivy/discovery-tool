<template>
<div class="frow centered-column">
  <div class="wrapper">
      <div class="intro">
        <div class="intro-title">
            work with us
        </div>
        <div class="intro-description">
            <p>SVNCRWNS is a management company + studio.  We work with artists + brands to connect with audiences, get organized and ready to scale their operation.  Complete our form below to see our recommended services.</p>

            <p>Let’s schedule our complimentary strategy session to learn about your goals and opportunities.</p>
        </div>
    </div>
    <div class="brand-button">
        <router-link to="/get-started">Get Started</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Intro',
   
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


</style>
