<template>
  <input type="date" v-model="datetime_display">
</template>

<script>
  export default {
    name: "DateTime",
    props: ['value'],

    computed: {
      datetime_display: {
        get: function() {
          let date = new Date(this.value);
          return date.toISOString().substring(0, 10);
        },
        set: function(date) {
          date = Date.parse(date);
          if ( ! isNaN( date ) ) {
            this.$emit( 'input', date );
          }
        }
      }
    }
  };
</script>
