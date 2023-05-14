<script lang="ts">
	import Button from '$lib/Button.svelte';
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	export let form: ActionData;
	let filter = form?.filter ? form?.filter : 'byname';
</script>

<div id="home-page">
	<article>
		{#if form?.success}
			<p>{JSON.stringify(form?.result)}</p>
		{/if}
	</article>
	<form id="searchbox" method="post" use:enhance>
		<select bind:value={filter} name="filter">
			<option value="bydate">By Date</option>
			<option value="byname">By name</option>
			<option value="bylocation">By location</option>
		</select>
		{#if filter === 'bydate'}
			<input name="query" type="date" value={form?.query ? form?.query : ""} />
		{:else}
			<input name="query" type="search" value={form?.query ? form?.query : ""} />
		{/if}
		<Button type="submit">Search</Button>
	</form>
	<ul id="eventlist" />
</div>
