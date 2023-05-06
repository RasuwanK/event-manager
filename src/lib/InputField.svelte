<script lang="ts">

  // All the props related to the component
	export let type: 'text' | 'number' | 'date' | 'textarea' | 'email';
	export let value: string = '';
	export let name: string;
	export let isRequired: boolean = false;
  export let label: string;

</script>

<div class="input-field flex flex-col">
	<label for={name}>{label}</label>
	{#if type === 'textarea'}
		<textarea {name} bind:value required={isRequired} />
	{:else if type === 'text'}
		<input id={name} {name} bind:value type="text" required={isRequired} />
	{:else if type === 'number'}
		<input id={name} {name} bind:value type="number" required={isRequired} />
	{:else if type === 'date'}
		<input id={name} {name} bind:value type="date" required={isRequired} />
	{:else}
		<input id={name} {name} bind:value type="text" required={isRequired} />
	{/if}
</div>
