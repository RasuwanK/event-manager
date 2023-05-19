<script lang="ts">
	import { page } from '$app/stores';
	import SearchBox from '$lib/SearchBox.svelte';
	import type { ActionData } from './$types';
	import Card from '$lib/DisplayCard/Card.svelte';
	import H from '$lib/H.svelte';
	export let form: ActionData;
</script>

<div id="home-page" class="flex flex-col w-full gap-8">
	<header>
		<H size={1} center={true}>Explore events</H>
	</header>
	<SearchBox />
	{#if $page.status === 400}
		<p>Invalid data</p>
	{:else if $page.status === 500}
		<p>Server error</p>
	{/if}
	{#if form?.success}
		{#if form?.data && form?.data.length > 0}
			<ul
				id="eventlist"
				class=" lg:w-full self-center flex-wrap grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 justify-items-center gap-y-7 gap-x-4"
			>
				{#each form?.data as { name, bookedPrecentage, venue, recent, date, id }, index (index)}
					<li id="eventlist-item">
						<Card {id} {recent} {bookedPrecentage} {date} {venue} {name} />
					</li>
				{/each}
			</ul>
		{:else}
			<p>No results found</p>
		{/if}
	{/if}
</div>
