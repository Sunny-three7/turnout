<template>
<div class="col-md-12">
    <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
    <div v-if="showForm">
        <div class="form-group">
            <label>Title</label>
            <input type="text" v-model="event.title" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Description</label>
            <input type="text" v-model="event.description" class="form-control">
        </div>
        <div class="form-group">
            <label>Date</label>
            <input type="date" v-model="event.date" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Location</label>
            <input type="text" v-model="event.location" class="form-control">
        </div>
        <button type="button" @click="addEvent" class="btn btn-block btn-success">Add Event</button>
    </div>
</div>
</template>
<script>
import {eventsRef} from '../firebaseApp'
export default {
    data() {
        return { 
            event: {
                title: '',
                description: '',
                date: '',
                location: '',
                email: ''
            },
            showForm: false,
        }
    },
    methods: {
        addEvent(){
            this.event.email = this.$store.state.user.email;
            eventsRef.set( eventsRef.push( eventsRef.ref(eventsRef.db, 'events') ), this.event);
        }
    }
}
</script>
