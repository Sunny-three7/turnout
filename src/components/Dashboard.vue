<template>
<div class="row">
    <div class="col-md-8"><h4>Events Dashboard</h4></div>
    <div class="col-md-4">
        <button @click="signOut" class="btn btn-danger btn-sm">{{$store.state.user.email}} - Sign Out</button>
    </div>
    <hr>
    <AddEvent />
    <br>
    <div class="col-md-12">
        <EventItem
        v-for="(event_item, index) in this.$store.state.event"
            :event="event_item"
            :key="index"
        />
    </div>
</div>
</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseApp'
import AddEvent from './Addevents.vue'
import EventItem from './Eventitem.vue'
export default {
    methods: {
        signOut(){
            this.$store.dispatch('signOut') //calling signout ftn in actions.js
            firebaseApp.sign_out(firebaseApp.auth)
            .catch((error) => {
                console.log(error)
            });
        }
    },
    components: {
        AddEvent,
        EventItem
    },
    mounted(){
        eventsRef.onValue( eventsRef.ref(eventsRef.db, 'events'), (snapshot) => {
                let events = []
                snapshot.forEach((event) => {
                    events.push(event.val())
                })
                // console.log(events)
                this.$store.dispatch('listEvents', events)
            })
    }
}
</script>
