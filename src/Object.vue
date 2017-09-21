<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="(value, key) in obj">
      <!-- <div v-if=" value.hasOwnProperty('boolean') ">
        b {{ key }}
      </div>
      <div v-else-if=" value.hasOwnProperty('number') ">
        n {{ key }}
      </div>
      <div v-else-if=" value.hasOwnProperty('string') ">
        s {{ key }} {{value}}
      </div>
      <div v-else-if=" value.hasOwnProperty('enum') ">
        e {{ key }}
      </div>
      <div v-else-if=" typeof(value) === "object" ">
        {{value}}
        <!-- <ObjectComponent :title="key" :obj="value"></ObjectComponent> -->
      </div>
      <!-- <div v-else>
        <div>{{ key }}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'ObjectComponent',
    props: ['title', 'obj']
  };
</script>
