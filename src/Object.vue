<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-for="(v, k) in value"  :style=" {'padding-left': level*20+'px'} ">
      <div v-if=" v.hasOwnProperty('boolean') ">
        <label>{{ k }}: </label>
        <input type="checkbox" v-model="value[k].boolean">
      </div>
      <div v-else-if=" v.hasOwnProperty('number') ">
        <label>{{ k }}: </label>
        <input type="number" v-model="value[k].number">
      </div>
      <div v-else-if=" v.hasOwnProperty('string') ">
        <label>{{ k }}: </label>
        <input v-model="value[k].string">
      </div>
      <div v-else-if=" v.hasOwnProperty('enum') ">
        <label>{{ k }}: </label>
        <select v-model="value[k].enum[0]">
          <option v-for="option in value[k].enum[1]">{{ option }}</option>
        </select>
      </div>
      <div v-else-if=" v.hasOwnProperty('datetime') ">
        <label>{{ k }}: </label>
        {{value[k]}}
        <DateTime v-model="value[k].datetime"></DateTime>
      </div>
      <div v-else-if=" typeof(v) === 'object' ">
        <ObjectComponent :title="k" v-model="value[k]" :level="level+1"></ObjectComponent>
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
    props: ['title', 'value', 'level'],
  };
</script>
