<template>
  <form class="pure-form pure-form-aligned">
    <ObjectComponent title="job" :value="obj" :level="0"></ObjectComponent>
  </form>
</template>

<script>
  import ObjectComponent from './Object.vue';
  
  
  
  export default {
    name: 'App',
    components: { ObjectComponent },
    data() {
      return {
        'obj': {}
      };
    },
      
    created() {
      return fetch('public/js/index.js').then( (response) => {
        return response.text();
      }).then( (text ) => {
        // split json object from enumerators
        let sections = text.split("};\n");
        let json_object = sections[0] + "};\n";
        json_object = json_object.split("\n");
        window.eval( sections[1] );
              
        let build_object = ( json ) => {
          let obj = {};
            
          while ( json.length > 0 ) {
            let line = json.shift();
            let key = null;
            let value = null;
              
            if ( line.indexOf(":") > -1 ) {          
              key = line.match(/"([^:]*)":/)[1];
              value = line.match(/"[^:]*":(.*)/)[1];
                
              value = value.trim();
              if ( value.endsWith(",") ) {
                value = value.substr( 0, value.length-1 );
              }
                
              value = parse_value( value, json );
            }
            else if ( line.trim() === "}" || line.trim() === "};" || line.trim() === "}," ) {
              // console.log(obj);
              return obj;
            }
              
            if ( value === null ) {
              console.log("×", line);
            }
            
            if ( key !== null ) {
              obj[key] = value;
            }
          }
        };
          
        let build_array = ( json ) => {
          let arr = [];
            
          while ( json.length > 0 ) {
            let line = json.shift();
            let value = null;
              
            if ( line.trim() === "]" || line.trim() === "];" || line.trim() === "]," ) {
              return arr;
            }
            else {
              line = line.trim();
              if ( line.endsWith(",") ) {
                line = line.substr( 0, line.length-1 );
              }
              value = parse_value( line, json );
            }
              
            if ( value === null ) {
              console.log("×", line);
            }
              
            arr.push( value );
          }
        };
          
        let parse_value = ( value_string, json ) => {
          let value = null;
            
          if ( value_string === "{" ) {
            value = build_object( json );
          }
          else if ( value_string === "[" ) {
            value = build_array( json );
          }
          else if ( value_string.match(/^{.*}$/)) {
            let sub_object = value_string.substring(1, value_string.length-1).split(",");
            sub_object.push( "}" );
            value = build_object( sub_object );
          }
          else if ( value_string.match(/^\[.*\]$/)) {
            let sub_array = value_string.substring(1, value_string.length-1).split(",");
            sub_array.push( "]" );
            value = build_array( sub_array );
          }
          else if( value_string === "true" || value_string === "false" ) {
            value = { "boolean": Boolean( value_string ) };
          }
          else if ( value_string.match(/^".*"$/) ) {
            value = { "string": String( value_string.substring(1, value_string.length-1 ) ) };
          }
          else if ( value_string.match(/^[0-9.]+$/) ) {
            value = { "number": Number( value_string ) };
          }
          else if ( value_string.match(/^[a-zA-Z_]*\(\)\.[a-zA-Z_]*$/) ) {
            let capture = value_string.match(/^[a-zA-Z_]*\(\)/);
            let enumerator;
            eval( "enumerator = " + capture );
            let enumerator_keys = Object.getOwnPropertyNames( enumerator );
            enumerator_keys.splice( enumerator_keys.indexOf("keys"), 1 );
            enumerator_keys.splice( enumerator_keys.indexOf("all"), 1 );
            value = { "enum": [ eval(value_string), enumerator_keys ] };
          }
          else if ( value_string = "(new Date()).getTime()" ) {
            value = { "datetime": (new Date()).getTime() };
          }
          else {
            console.log( value_string );
          }
            
          return value;
        };
        
        let o = build_object( json_object );
        this.obj = Object.assign({}, this.obj, o );
      });
    }
      
  };
  

  

</script>
