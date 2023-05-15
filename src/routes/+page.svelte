<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import SearchBox from '$lib/SearchBox.svelte';

	export let form: ActionData;
</script>

<div id="home-page" class="flex flex-col w-full">
  <SearchBox prevQuery={form?.query} prevFilter={form?.filter} />
	<article id="events">
		{#if $page.status === 400}
			<p>Invalid form submission</p>
    {:else if $page.status === 500}
      <p>Internal server error</p>
		{/if}
		{#if form?.success}
			{#if form?.result.length > 0}
				<ul id="eventlist">
					{#each form?.result as event, index (index)}
						<li>{event.name}</li>
					{/each}
				</ul>
			{:else}
				<p>No results found</p>
			{/if}
		{/if}
	</article>
</div>
