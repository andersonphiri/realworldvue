<template>

<div v-if="GStore.event"> 
<h1>{{ GStore.event.title }}</h1>


<div id="nav"> 
    <!-- <router-link :to="{name: 'EventDetails', params:{ id }}">  -->
    <router-link :to="{name: 'EventDetails'}"> 
        Details
    </router-link> | 
     <router-link :to="{name: 'EventRegister'}">
        Register
    </router-link> | 
    <router-link :to="{name: 'EventEdit'}">
        Edit
    </router-link>

</div>
<router-view :event="GStore.event">
</router-view>
    
</div>
     
</template>

<script>
//import EventService from '@/services/EventService.js'
export default {
    inject: ['GStore']
    // name: 'EventLayout',
    // props: ['id'],
    // data() {
    //     return {
    //         event: null
    //     }
    // }
    // ,
    // created() {
    //    // EventService.getEvent(this.id)
    //    EventService.touringVueRouterGetEvent(this.id)
    // .then(response =>  {
    //   this.event = response.data

    // }).catch (error => {
    //     if (error.response && error.response.status == 404) {
    //          this.$router.push({
    //             name: '404Resource',
    //             params: {resource: 'event'}
    //         })   
    //     } else {
    //         this.$router.push({name: 'NetworkError'})
    //     }
    //   console.log(error)
      
    // })

    // },
}
</script>