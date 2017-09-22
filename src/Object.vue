<template>
  <div :class=" level > 0 ? 'object' : '' ">
    <legend>{{ title | capitalize }}</legend>
    <div v-for="(v, k) in value"  :style=" {'padding-left': 30+'px'} ">
      <div v-if=" v.hasOwnProperty('boolean') " class="row">
        <span>
          <label>{{ k }}: </label>
          <input type="checkbox" v-model="value[k].boolean">
        </span>
      </div>
      <div v-else-if=" v.hasOwnProperty('number') " class="row">
        <label>{{ k }}: </label>
        <input type="number" v-model="value[k].number">
      </div>
      <div v-else-if=" v.hasOwnProperty('string') " class="row">
        <label>{{ k }}: </label>
        <input v-model="value[k].string">
      </div>
      <div v-else-if=" v.hasOwnProperty('enum') " class="row">
        <label>{{ k }}: </label>
        <select v-model="value[k].enum[0]">
          <option v-for="option in value[k].enum[1]">{{ option }}</option>
        </select>
      </div>
      <div v-else-if=" v.hasOwnProperty('datetime') " class="row">
        <label>{{ k }}: </label>
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

<style scoped>
  .object {
    box-shadow: inset 5px 0px rgb(242, 242, 242); /* fake border-left */
    transition: box-shadow ease-in 0.3s;
  }
  .object:hover {
    box-shadow: inset 3px 0px #119; /* fake border-left */

  }
  legend {
    padding-left: 10px;
    font-size: 105%;
    font-weight: 800;
    border: none
  }
  .row {
    margin-bottom: 10px;
  }
  .row label {
    background-color: rgb(242, 242, 242);
    color: black;
    display: inline-block;
    height: 27px;
    min-width: 200px;
    padding: 9px 7px 0 5px;
    vertical-align: top;
    margin: 0 -7px 0 0;
    transition: background-color ease-in 0.3s;
    transition: color ease-in 0.1s;
  }
  .row:hover label {
    background-color: #119;
    color: white;
  }
  .row [type=checkbox] {
    margin: auto 0 auto 13px;
  }
  .row span {
    display: inline-flex;
    background-color: #ddd;
    padding-right: 5px;
  }
</style>

<script>
  import DateTime from './DateTime.vue';
  
  export default {
    name: 'ObjectComponent',
    components: { DateTime },
    props: ['title', 'value', 'level'],
    
    filters: {
      capitalize: function (value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  };
</script>
