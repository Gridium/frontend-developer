<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="(value, key) in obj"  :style=" {'padding-left': level*20+'px'} ">
      <div v-if=" value.hasOwnProperty('boolean') ">
        <label>{{ key }}: </label>
        <input type="checkbox" v-model="obj[key].boolean">
      </div>
      <div v-else-if=" value.hasOwnProperty('number') ">
        <label>{{ key }}: </label>
        <input type="number" v-model="obj[key].number">
      </div>
      <div v-else-if=" value.hasOwnProperty('string') ">
        <label>{{ key }}: </label>
        <input v-model="obj[key].string">
      </div>
      <div v-else-if=" value.hasOwnProperty('enum') ">
        {{ obj[key].enum[0] }}
        <select vmodel="obj[key].enum[0]">
          <option v-for="value in obj[key].enum[1]">{{ value }}</option>
          <!-- <option v-for="" -->
        </select>
      </div>
      <div v-else-if=" value.hasOwnProperty('datetime') ">
        <label>{{ key }}: </label>
        <DateTime :datetime="obj[key].datetime"></DateTime>
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
  import DateTime from './DateTime.vue';
  
  export default {
    name: 'ObjectComponent',
    components: { DateTime },
    props: ['title', 'obj', 'level'],
  };
</script>
