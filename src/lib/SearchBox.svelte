<script lang="ts">
	import { enhance } from '$app/forms';
	import searchSVG from '$lib/svgs/search.svg';
	export let prevFilter: string | null | undefined = undefined;
	export let prevQuery: string | null | undefined = undefined;
	let selectedFilter = prevFilter ? prevFilter : 'byname';
</script>

<form
	id="searchbox"
	method="post"
	use:enhance={({data}) => {
		data.set('today', new Date().toISOString());
		return async ({update}) => {
			await update();
		}
	}}
	class="self-center flex flex-row w-[50em] justify-stretch h-20"
>
	<select
		bind:value={selectedFilter}
		name="filter"
		class="bg-[#222222] text-white rounded-l-full p-4"
	>
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
			type={selectedFilter === 'bydate' ? 'date' : 'text'}
			value={prevQuery ? prevQuery : ''}
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
