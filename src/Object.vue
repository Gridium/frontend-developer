<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="(value, key) in obj"  :style=" {'padding-left': level*20+'px'} ">
      <div v-if=" value.hasOwnProperty('boolean') ">
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
      <div v-else-if=" value.hasOwnProperty('datetime') ">
        d {{ key }}
      </div>
      <div v-else-if=" Array.isArray(value) ">
        array {{key}}
      </div>
      <div v-else-if=" typeof(value) === 'object' ">
        <ObjectComponent :title="key" :obj="value" :level="level+1"></ObjectComponent>
      </div>
      <div v-else>
        xx
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ObjectComponent',
    props: ['title', 'obj', 'level']
  };
</script>
