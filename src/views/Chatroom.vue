<template>
  <div class="container">
    <Navbar />
    <chat-window />
    <new-chat-form />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import ChatWindow from '../components/ChatWindow'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import ChatWindow from '../components/ChatWindow.vue'

export default {
  components: { Navbar, NewChatForm, ChatWindow, ChatWindow },
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