<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

export default {
  components: { Navbar },
  setup() {
    let { user } = getUser()
    const router = useRouter()

    watch(user, (user) => {
      console.log('User inside watch have changed: ',user)
      if(!user)
      {
        router.push({name: 'Welcome'})
      }
    })
    
    
  }

}
</script>

<style>
    
</style>