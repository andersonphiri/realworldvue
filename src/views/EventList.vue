<template>
 
  <div class="events">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1> Events For Good </h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <div class="pagination">
      <router-link
      :to="{name: 'EventList', query: { page: page - 1 }}"
      rel="prev"
      id="page-prev"
      v-if="page != 1">Prev Page</router-link>

      <router-link
      :to="{name: 'EventList', query: { page: page + 1 }}"
      id="page-next"
      v-if="hasNextPage"
      rel="next">Next Page</router-link>

    </div>

    
    
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from '@/services/EventService.js';
//import { watchEffect } from 'vue'
export default {
  name: "EventList",
  props: ['page'],
  components: {
    EventCard,
  },
  beforeRouteEnter (routeTo, routeFrom, next) {
     EventService.touringVueRouterGetEvents(2, parseInt(routeTo.query.page) || 1)
    .then(response =>  {
      next(comp => {
        comp.events = response.data
        comp.totalEvents = response.headers['x-total-count']
      })
    }).catch (() => {
      next({name: 'NetworkError'})
    })

  },
  beforeRouteUpdate (routeTo) {
     return EventService.touringVueRouterGetEvents(2, parseInt(routeTo.query.page) || 1)
    .then(response =>  {
       this.events = response.data
        this.totalEvents = response.headers['x-total-count']
    }).catch (() => {
      return {name: 'NetworkError'}
    })

  },

  data () {
    return {
      events: []  ,
      totalEvents : 0
    }
  },
  // created () {
  //   watchEffect(() => {
  //     // EventService.getEvents() 
  //     this.events = null
  //  EventService.touringVueRouterGetEvents(2, this.page)
  //   .then(response =>  {
  //     this.events = response.data
  //     this.totalEvents = response.headers['x-total-count']

  //   }).catch (error => {
  //     console.log(error)
  //     this.$router.push({name: 'NetworkError'})
  //   })
  //   })
  // },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalEvents / 2)
      return this.page < totalPages
    }
  }
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;

}
#page-next {
  text-align: right;
}

</style>
