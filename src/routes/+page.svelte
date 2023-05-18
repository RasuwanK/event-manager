<script lang="ts">
	import { page } from '$app/stores';
	import SearchBox from '$lib/SearchBox.svelte';
	import type { ActionData } from './$types';
	import dateIcon from '$lib/svgs/date.svg';
	import locationIcon from '$lib/svgs/location.svg';
	export let form: ActionData;
</script>

<div id="home-page" class="flex flex-col w-full gap-4">
	<header>
		<h1 class="text-center text-4xl font-bold">Explore events</h1>
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
				{#each form?.data as { name, bookedPrecentage, venue, recent, date }, index (index)}
					<li id="eventlist-item">
						<article
							id="event"
							class="bg-[#F3F4F4] rounded-lg border border-[#A1A1A1]  w-[300px] h-[250px] drop-shadow-md flex flex-col"
						>
							<section id="body" class="p-4 grow flex flex-col">
								<section id="top" class="flex flex-row">
									{#if recent}
										<span class="text-sm font-bold">Recently added</span>
									{/if}
									<span class="text-sm ml-auto bg-[#222222] text-white px-2 py-1 rounded-full">{bookedPrecentage}% sold</span>
								</section>
								<h3 class="text-xl font-bold my-2">{name}</h3>
								<div id="info" class="flex flex-row items-center gap-1">
									<span id="icon"><img src={dateIcon} alt="Icon of a clock" width="16" height="16" /></span>
									<span id="text">{date.toLocaleDateString()}</span>
								</div>
								<div id="info" class="flex flex-row items-center gap-1">
									<span id="icon"><img src={locationIcon} alt="Icon of a location pin" width="16" height="16" /></span>
									<span id="text">{venue}</span>
								</div>
							</section>
							<section id="bottom" class="flex flex-col items-stretch h-[50px]">
								<a
									href="/book/"
									class="bg-[#222222] text-white w-full h-full flex flex-col items-center justify-center rounded-b-lg"
									>Book now</a
								>
							</section>
						</article>
					</li>
				{/each}
			</ul>
		{:else}
			<p>No results found</p>
		{/if}
	{/if}
</div>
