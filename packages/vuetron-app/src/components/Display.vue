<template>
 <div id="displayWrapper">
   <p>DISPLAY</p> 
   <EventStream class="eventStream"></EventStream>
 </div> 
</template>

<script type="text/javascript">
console.log('STORE:', this.$store);

import EventStream from './EventStream.vue';

export default {
    components: {
        EventStream
    },
//   props: ['msg'],
//   computed: {
//     messages () {
//       return this.$store.state.messages;
//   },
//     tests() {
//     console.log('STORE STATE', this.$store.state);
//       console.log('STORE TESTS', this.$store.state.tests)
//       return this.$store.state.tests;
//     }
//  }
}
</script>

<style scoped>
    #displayWrapper {
        overflow: scroll;
    }
    .eventStream {
        height: 100%;
    }
    /* #registrations {
            box-shadow: 1px 1px 2px 1px #ccc;
            margin: 20px;
            padding: 20px;
            display: inline-block;
            width: 300px;
            vertical-align: top;
            text-align: left;
        }
    
        .summary {
            text-align: center;
        }
    
        .row h4 {
            display: inline-block;
            width: 30%;
            margin: 0 0 10px 0;
            box-sizing: border-box;
        }
    
        .row span {
            width: 30%;
            color: red;
            cursor: pointer;
        }
    
        .row span:hover {
            color: darkred;
        }
    
        .date {
            display: inline-block;
            width: 38%;
            text-align: right;
            box-sizing: border-box;
        } */
</style>