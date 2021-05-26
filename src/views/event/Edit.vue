<template>
<div v-if="event"> 
    <h1>{{ event.title }}</h1>

    <h6> your event id is : {{ $route.params.id }} </h6>
    <p>Edit the event here</p>
</div>
</template>
<script>
export default {
    name: 'EventEdit',
    props: ['event'],
}
</script>