<template>
  <div>
    <b-jumbotron header="Welcome to MWT" lead="For your pleasure we're working on a live updating textbox!" >
      <hr class="col-6"/>
      <b-textarea :rows="3" class="mx-auto col-4" v-model="text"></b-textarea>
    </b-jumbotron>
  </div>
</template>

<script>
import {SubscriptionClient} from 'subscriptions-transport-ws'

export default {
  name: 'hello',
  data () {
    return {
      ws: {}
    }
  },
  computed: {
    text () {
      return this.$store.state.text
    }
  },
  created: () => {
    this.ws = new SubscriptionClient(`ws://localhost:5001/`, {
      reconnect: true,
      connectionParams: {
        // stuff
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
