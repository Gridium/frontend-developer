<template>
  <div>
    <h1>Object Editor</h1>
    <p>
      Edits an object based on data parsed in <em>index.js</em>.<br>
      Design is based on assumption that the contents of the file are unknown.
    </p>
    <form class="pure-form pure-form-aligned">
      <ObjectComponent title="job" :value="obj" :level="0"></ObjectComponent> <!-- Start recursively building the editor. -->
    </form>
    <Viewer :obj="obj"></Viewer> <!-- Build the source viewer -->
  </div>
</template>

<style>
  h1 {
    background-color: #119;
    color: white;
    padding: 10px 0 5px 20px;
    margin: 0;
    font-family: Share, Lato, sans-serif;
    font-size: 40px;
  }
  p {
    padding-left: 15px;
    background-color: rgb(237, 237, 237);
    margin: 0 0 5px 0;
    padding: 15px 0 15px 15px;
    font-size: 103%;
    line-height: 140%;
  }
</style>

<script>
  import ObjectComponent from './Object.vue';
  import Viewer from './Viewer.vue';
  
  export default {
    name: 'App',
    components: { ObjectComponent, Viewer },
    data() {
      return {
        'obj': {}
      };
    },
    
    // Fetch and parse index.js
    created() {
      return fetch('js/index.js').then( (response) => {
        return response.text();
      }).then( (text ) => {
        // find json object and enumerators
        let sections = text.split("};\n"); // split the file after object is created
        let json_string_array = sections[0] + "};\n";
        json_string_array = json_string_array.split("\n");
        window.eval( sections[1] ); // UNSAFE: evaluate the enumerators
        
        // used to recursively build object line-by-line
        let build_object = ( json ) => {
          let obj = {};
            
          while ( json.length > 0 ) {
            let line = json.shift();
            let key = null;
            let value = null;
              
            if ( line.indexOf(":") > -1 ) { // line contains key-value pair
              key = line.match(/"([^:]*)":/)[1];
              value = line.match(/"[^:]*":(.*)/)[1];
                
              value = value.trim();
              if ( value.endsWith(",") ) {
                value = value.substr( 0, value.length-1 );
              }
                
              value = parse_value( value, json );
            }
            else if ( line.trim() === "}" || line.trim() === "};" || line.trim() === "}," ) { // line ends object
              return obj;
            }
              
            if ( value === null ) { // line can't be parsed
              console.log("×", line);
            }
            
            // add value to current object
            if ( key !== null ) {
              obj[key] = value;
            }
          }
        };
        
        // used to recursicely build array line-by-line
        let build_array = ( json ) => {
          let arr = [];
            
          while ( json.length > 0 ) {
            let line = json.shift();
            let value = null;
              
            if ( line.trim() === "]" || line.trim() === "];" || line.trim() === "]," ) { // line ends array
              return arr;
            }
            else { // line is a value
              line = line.trim();
              if ( line.endsWith(",") ) {
                line = line.substr( 0, line.length-1 );
              }
              value = parse_value( line, json );
            }
              
            if ( value === null ) { // line can't be parsed
              console.log("×", line);
            }
              
            arr.push( value );
          }
        };
        
        // main function for building objects: determines value for key-value pair
        let parse_value = ( value_string, json ) => {
          let value = null;
            
          if ( value_string === "{" ) { // line begins sub-object
            value = build_object( json );
          }
          else if ( value_string === "[" ) { // line begins sub-array
            value = build_array( json );
          }
          else if ( value_string.match(/^{.*}$/)) { // line is a one-line object
            let sub_object = value_string.substring(1, value_string.length-1).split(",");
            sub_object.push( "}" );
            value = build_object( sub_object );
          }
          else if ( value_string.match(/^\[.*\]$/)) { // line is a one-line array
            let sub_array = value_string.substring(1, value_string.length-1).split(",");
            sub_array.push( "]" );
            value = build_array( sub_array );
          }
          else if( value_string === "true" || value_string === "false" ) { // line is a boolean
            value = { "boolean": Boolean( value_string ) };
          }
          else if ( value_string.match(/^".*"$/) ) { // line is a string
            value = { "string": String( value_string.substring(1, value_string.length-1 ) ) };
          }
          else if ( value_string.match(/^[0-9.]+$/) ) { // line is a number
            value = { "number": Number( value_string ) };
          }
          else if ( value_string.match(/^[a-zA-Z_]*\(\)\.[a-zA-Z_]*$/) ) { // line is an enum
            let capture = value_string.match(/^[a-zA-Z_]*\(\)/);
            let enumerator;
            eval( "enumerator = " + capture );
            let enumerator_keys = Object.getOwnPropertyNames( enumerator );
            enumerator_keys.splice( enumerator_keys.indexOf("keys"), 1 );
            enumerator_keys.splice( enumerator_keys.indexOf("all"), 1 );
            value = { "enum": [ eval(value_string), enumerator_keys ] };
          }
          else if ( value_string = "(new Date()).getTime()" ) { // line is a datetime
            value = { "datetime": (new Date()).getTime() };
          }
          else {
            console.log( value_string ); // line is unparseable
          }
            
          return value;
        };
        
        // start building the object, and set it as this.obj
        let o = build_object( json_string_array );
        this.obj = Object.assign({}, this.obj, o );
      });
    }
      
  };
  

  

</script>
