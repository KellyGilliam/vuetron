<template>
 <div>
   <p>EVENT STREAM</p> 
   <div class="row" v-for="message in messages">
       <h1 class="message">{{ message }}</h1>
   </div>
   <div class="row" v-for="test in tests">
        <h1 class="test">{{ test }}</h1>
    </div>
 </div> 
</template>

<script type="text/javascript">
console.log('STORE:', this.$store);

export default {
  props: ['msg'],
  computed: {
    messages () {
      return this.$store.state.messages;
    },
    tests() {
      console.log('STORE STATE', this.$store.state);
      console.log('STORE TESTS', this.$store.state.tests)
      return this.$store.state.tests;
    }
 }
}
</script>

<style scoped>
    /* #registrations {
            box-shadow: 1px 1px 2px 1px #ccc;
            margin: 20px;
            padding: 20px;
            display: inline-block;
            width: 300px;
            vertical-align: top;
            text-align: left;
        } */
    
        /* .summary {
            text-align: center;
        } */
    
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

        .message {
            background-color: cyan;
            border-radius: 10px;
        }

        .test {
            background-color: cyan;
            border-radius: 10px;
        }
    
        /* .date {
            display: inline-block;
            width: 38%;
            text-align: right;
            box-sizing: border-box;
        } */
</style>