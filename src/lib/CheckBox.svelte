<script lang="ts">
	export let label: string = '';
	export let isChecked: boolean = false;
	export let name: string;
</script>

<div id="input-field-checkbox" class="w-full flex flex-row items-center">
	<label for={name} class="text-sm select-none text-center">{label} </label>
	<input type="checkbox" bind:checked={isChecked} id={name} {name} />
</div>
