<script lang="ts">
	export let condition: boolean;
</script>

{#if condition}
	<span class="text-sm font-bold"><slot /></span>
{/if}
