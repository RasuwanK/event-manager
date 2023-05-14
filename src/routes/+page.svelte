<script lang="ts">
	import Button from "$lib/Button.svelte";

</script>
<div id="home-page">
  <form id="searchbox" method="post">
    <select name="filter">
      <option value="bydate">By Date</option>
      <option value="byname">By name</option>
      <option value="bylocation">By location</option>
    </select>
    <input type="search" />
    <Button type="submit">Search</Button>
  </form>
  <ul id="eventlist">
    
  </ul>
</div>
