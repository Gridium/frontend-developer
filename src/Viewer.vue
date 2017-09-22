<template>
  <div>
    <h2 @click=" toggle_display() ">Current Data (if you're interested) {{ open ? '<' : '>'}}</h2>
    <pre v-if="open">{{ output }}</pre>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 20px;
    padding-bottom: 5px;
    padding-top: 5px;
    padding-left: 10px;
    cursor: pointer;
    transition: background-color ease-in 0.3s, color ease-in 0.1s;
    margin: 0 0 5px;
  }
  h2:hover {
    background-color: #119;
    color: white;
  }
  pre {
    margin: 0 20px 0 20px;
    padding: 15px 15px;
    background-color: #404049;
    border-radius: 8px;
    box-shadow: inset 4px 2px 2px rgba(0,0,0,0.3);
    color: white;
    font-family: Inconsolata, monospace;
    font-size: 14px;
  }
</style>

<script>
  export default {
    name: "Viewer",
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
        
        if ( this.open === true ) { // autoscroll on opening
          let start = null;
          let scroll = ( timestamp, total ) => {
            start = start || timestamp;
            
            if ( timestamp - start > 250 ) {
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
