<template>
<div v-if="event"> 
    <h1>{{ event.title }}</h1>

    <h6> your event id is : {{ $route.params.id }} </h6>
    <p>Register for the event here</p>
    <input type="Button" value="Click here to Register"  @click="register" >
</div>
</template>
<script>
export default {
    name: 'EventRegister',
    props: ['event'],
    inject: ['GStore'],
    methods: {
        register() {
        this.GStore.flashMessage = 'you have successfully registered for the event: '+ this.event.title
        setTimeout(() => {this.GStore.flashMessage = ''}, 3000)
        
        this.$router.push({
        name: 'EventDetails',
      //  params: {id: this.event.id}
    })
}
    }

}
</script>