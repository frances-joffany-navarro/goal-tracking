<template>
  <div class="home">
    <Signin/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from '@/components/Signin.vue'

export default {
  name: 'Sign',
  components: {
    Signin
  }
}
</script>
