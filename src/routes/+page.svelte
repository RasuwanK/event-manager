<script lang="ts">
  import {onMount} from "svelte";

  let data = [];

  onMount(async () => {
    const response = await fetch('/search-event');
    let data = await response.json();
  });
  
</script>
<div id="home-page">
  <form id="searchbox">

  </form>
  <ul id="eventlist">
    
  </ul>
</div>
