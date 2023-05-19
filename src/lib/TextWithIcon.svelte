<script lang="ts">
	export let iconPath: string;
	export let text: string;
	export let iconDimensions: [number, number];
	export let iconAlt: string;
</script>

<div id="info" class="flex flex-row items-center gap-1 my-1">
	<span id="icon"
		><img src={iconPath} alt={iconAlt} width={iconDimensions[0]} height={iconDimensions[1]} /></span
	>
	<span id="text" class="text-sm">{text}</span>
</div>
