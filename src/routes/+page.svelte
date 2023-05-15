<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
	let filter = form?.filter ? form?.filter : 'byname';
</script>

<div id="home-page" class="flex flex-col w-full">
	<article>
		{#if form?.success}
			<p>{JSON.stringify(form?.result)}</p>
		{/if}
	</article>
	<form id="searchbox" method="post" use:enhance class="self-center flex flex-row w-[80%] justify-stretch h-20">
		<select bind:value={filter} name="filter" class="bg-[#222222] text-white rounded-l-full p-4">
			<option value="byname">By name</option>
			<option value="bydate">By Date</option>
			<option value="bylocation">By location</option>
		</select>
		<div id="searchbox" class="rounded-r-full border-2 border-[#222222] flex flex-row w-full grow items-stretch outline-none">
			<input
				name="query"
				type={filter === 'bydate' ? 'date' : 'text'}
				value={form?.query ? form?.query : ''}
        class="outline-none grow"
			/>
			<button type="submit" class="drop-shadow-lg rounded-full m-2 w-16 h-16 text-white bg-[#222222] self-center">Search</button>
		</div>
	</form>
	<ul id="eventlist" />
</div>
