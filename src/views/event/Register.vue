<template>
<div v-if="event"> 
    <h1>{{ event.title }}</h1>

    <h6> your event id is : {{ $route.params.id }} </h6>
    <p>Register for the event here</p>
    <input type="Button"  @click="register" >
</div>
</template>
<script>
export default {
    name: 'EventRegister',
    props: ['event'],
    methods: {
        register() {
        this.$router.push({
        name: 'EventDetails',
      //  params: {id: this.event.id}
    })
}
    }

}
</script>