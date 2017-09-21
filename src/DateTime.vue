<template>
  <input type="date" v-model="datetime_display">
</template>

<script>
  export default {
    name: "DateTime",
    props: ['datetime'],

    computed: {
      datetime_display: {
        get: function() {
          let date = new Date(this.datetime);
          return date.toISOString().substring(0, 10);
        },
        set: function(date) {
          console.log( new Date( date ).getTime() );
        }
      }
    }
  };
</script>
