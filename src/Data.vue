<template>
  <div>
    <h2 @click=" toggle_display() ">Current Data (if you're interested) {{ open ? '<' : '>'}}</h2>
    <pre v-if="open">{{ output }}</pre>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 20px;
    margin-bottom: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
  h2:hover {
    color: #119;
  }
  pre {
    margin: 0 20px 0 20px;
    padding: 15px 15px;
    background-color: #404049;
    border-radius: 8px;
    box-shadow: inset 4px 2px 2px rgba(0,0,0,0.3);
    color: white;
    font-family: monospace;
    font-size: 13px;
  }
</style>

<script>
  export default {
    props: ['obj'],
    data() {
      return {
        open: false
      };
    },
    
    computed: {
      output() {
        return JSON.stringify( this.obj, null, 2 );
      }
    },
    
    methods: {
      toggle_display() {
        this.open = !this.open;
        
        if ( this.open === true ) {
          let start = null;
          let scroll = ( timestamp, total ) => {
            start = start || timestamp;
            
            if ( timestamp - start > 500 ) {
              return;
            }
            
            window.scrollBy(0, 20);
            requestAnimationFrame(scroll);
          };
          
          let animation = requestAnimationFrame(scroll);
          setTimeout( ()=> {
            cancelAnimationFrame(animation);
          }, 500);
        }
      }
    }
  };
</script>
