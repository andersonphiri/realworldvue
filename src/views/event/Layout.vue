<template>

<div v-if="event"> 
<!-- <h1>{{ event.title }}</h1> -->

<router-view :event="event">
</router-view>
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

    
</div>
     
</template>

<script>
import EventService from '@/services/EventService.js'
export default {
    name: 'EventLayout',
    props: ['id'],
    data() {
        return {
            event: null
        }
    }
    ,
    created() {
       // EventService.getEvent(this.id)
       EventService.touringVueRouterGetEvent(this.id)
    .then(response =>  {
      this.event = response.data

    }).catch (error => {
      console.log(error)
    })

    },
}
</script>