<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import searchSVG from '$lib/svgs/search.svg';
	import { page } from '$app/stores';

	export let form: ActionData;
	let filter = form?.filter ? form?.filter : 'byname';
</script>

<div id="home-page" class="flex flex-col w-full">
	<form
		id="searchbox"
		method="post"
		use:enhance
		class="self-center flex flex-row w-[50em] justify-stretch h-20"
	>
		<select bind:value={filter} name="filter" class="bg-[#222222] text-white rounded-l-full p-4">
			<option value="byname">By name </option>
			<option value="bydate">By Date</option>
			<option value="bylocation">By location</option>
		</select>
		<div
			id="searchbox"
			class="rounded-r-full border-2 border-[#222222] flex flex-row w-full grow items-stretch outline-none"
		>
			<input
				name="query"
				placeholder="Search any event you want"
				type={filter === 'bydate' ? 'date' : 'text'}
				value={form?.query ? form?.query : ''}
				class="outline-none grow px-3"
			/>
			<button
				type="submit"
				class="drop-shadow-lg rounded-full m-2 w-16 h-16 flex flex-col items-center justify-center text-white bg-[#222222] self-center"
			>
				<img src={searchSVG} width="40" height="40" alt="search" />
			</button>
		</div>
	</form>
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
