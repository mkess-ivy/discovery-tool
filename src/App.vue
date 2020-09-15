<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img class="svncrwns-logo" src="./assets/svncrwns-logo.png"  /></router-link>
      <div class="business">management</div>
    </div>
    <div class="screen-msg">Please view this on a mobile device with screen size of 414px or smaller</div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: $primary-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;
  position: fixed;
  top:0;
  background: $black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.svncrwns-logo {
  width: 75%;
  margin:0 auto;
}

.business {
  letter-spacing:7px;
  text-transform: uppercase;
  font-size:14px;
  text-align:center;
  font-weight:bold;
  color: $white;
}
</style>