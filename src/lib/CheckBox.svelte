<script lang="ts">
	export let label: string = '';
	export let isChecked: boolean = false;
	export let name: string;
</script>

<div id="input-field-checkbox" class="flex flex-row items-center gap-2">	
	<input type="checkbox" bind:checked={isChecked} id={name} {name} />
  <label for={name} class="text-xs sm:text-sm select-none text-center">{label} </label>
</div>
