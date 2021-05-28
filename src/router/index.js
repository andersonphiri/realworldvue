import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import About from '../views/About.vue'
import EventLayout from '@/views/event/Layout.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'
import SimpleForm from '@/views/SimpleForm.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import EventService from '@/services/EventService.js'
import GStore from "@/store";
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props : (route) => ({
      page: parseInt(route.query.page) || 1
    })
  },
  {
    path: "/events/:id", //  path: "/event/:id",
    name: "EventLayout",
    component: EventLayout,
     props: true,
     beforeEnter : to => {
     return EventService.touringVueRouterGetEvent(to.params.id)
      .then(response =>  {
       // this.event = response.data
       GStore.event = response.data
       console.log("respnse data was",response.data)
  
      }).catch (error => {
          if (error.response && error.response.status == 404) {
              return {
                name: '404Resource',
                params: {resource: 'event'}
            }
          } else {
              return {name: 'NetworkError'};
          }
        
      })
     },
     children: [
      {
        path: "", // similar to "/event/:id"
        name: "EventDetails",
        component: EventDetails,
        // props: true,
        // props: (route)  => {
        //   showExtra: route.query.e
        // }
      },
      {
        path: "register", // same as "/event/:id/register"
        name: "EventRegister",
        component: EventRegister,
        // props: true,
        // props: (route)  => {
        //   showExtra: route.query.e
        // }
      },
      {
        path: "edit", // same as "/event/:id/edit"
        name: "EventEdit",
        component: EventEdit,
       //  props: true,
        // props: (route)  => {
        //   showExtra: route.query.e
        // }
      },
      
     ],
     
    // props: (route)  => {
    //   showExtra: route.query.e
    // }
  },
  // {
  //   path: '/event/:id', // path: '/event/:afterEvent(.*)',
  //   redirect: to => {
  //     return { name: 'EventLayout', params: {id: to.params.id}}
  //   },
  //   children: [
  //     {
  //       path: "register", redirect : () => ({name: "EventRegister"})
  //     },
  //     {
  //       path: "edit", redirect : () => ({name: "EventEdit"})
  //     }
  //   ]
  // },

  // works same as above
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return {path: '/events/' + to.params.afterEvent}
    }
  }
  ,
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
      path: "/about",
      name: "About",
      component: About,
      alias: '/who-we-are'
  },
  {
    path: '/about-us',
    redirect: {name: 'About'}
  },
  {
    path: "/simpleform",
    name: "SimpleForm",
    component: SimpleForm,
},
{
  path: "/:catchAll(.*)",
  name: 'NotFound',
  component: NotFound,
},
{
  path: "/404/:resource",
  name: '404Resource',
  component: NotFound,
  props: true,
},
{
  path: "/network-error",
  name: 'NetworkError',
  component: NetworkError,
  props: true,
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done(true)
})
export default router;
