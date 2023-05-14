<script lang="ts">
	import Button from "$lib/Button.svelte";
	import type { ActionData } from "./$types";
  import {enhance} from '$app/forms';
  export let form: ActionData
  console.log(form?.result);
</script>
<div id="home-page">
  <form id="searchbox" method="post" use:enhance>
    <select name="filter">
      <option value="bydate">By Date</option>
      <option value="byname">By name</option>
      <option value="bylocation">By location</option>
    </select>
    <input name="query" type="search" />
    <Button type="submit">Search</Button>
  </form>
  <ul id="eventlist">
    
  </ul>
</div>
