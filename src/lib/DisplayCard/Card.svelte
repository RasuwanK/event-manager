<script lang="ts">
	import dateIcon from '$lib/svgs/date.svg';
	import locationIcon from '$lib/svgs/location.svg';
	import TextWithIcon from '$lib/TextWithIcon.svelte';
	import H from '$lib/H.svelte';
	import BottomLink from '$lib/DisplayCard/BottomLink.svelte';
	import Status from '$lib/DisplayCard/Status.svelte';
    export let recent: boolean;
    export let bookedPrecentage: number;
    export let date: Date;
    export let venue: string;
    export let name: string;
	export let id: string;
</script>
<article
	id="event"
	class="bg-[#F3F4F4] rounded-lg border border-[#A1A1A1] w-[300px] h-[250px] drop-shadow-md flex flex-col"
>
	<section id="body" class="p-4 grow flex flex-col">
		<Status {recent} {bookedPrecentage} />
		<H size={3} margin={2}>{name}</H>
		<TextWithIcon
			iconPath={dateIcon}
			text={date.toLocaleDateString()}
			iconDimensions={[16, 16]}
			iconAlt="Icon of a calendar"
		/>
		<TextWithIcon
			iconPath={locationIcon}
			text={venue}
			iconDimensions={[16, 16]}
			iconAlt="Icon of a location pin"
		/>
	</section>
	<section id="bottom" class="flex flex-col items-stretch h-[50px]">
		<BottomLink {id}>Book now</BottomLink>
	</section>
</article>
