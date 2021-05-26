<template>
<div v-if="event"> 
    <h1>{{ event.title }}</h1>

    <p> @{{ event.time }} on {{ event.date }} @ {{ event.location }} </p>
    <p> {{ event.description }} </p>
    <h6> your event id is : {{ $route.params.id }} </h6>
</div>
</template>
<script>
export default {
    name: 'EventDetails',
    props: ['event'],
}
</script>