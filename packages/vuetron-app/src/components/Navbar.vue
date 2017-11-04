<template>
 <div>
   <p id="title">VUETRON</p>
    <div>
      <button>Event Stream</button>
      <button>Subscriptions</button>
      <button>State</button>
    </div>
 </div> 
</template>

<script type="text/javascript">
console.log('STORE:', this.$store);

export default {

}
</script>

<style scoped>
    #title {
        color: #5499AC
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