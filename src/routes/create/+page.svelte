<script lang="ts">
	import type { ActionData } from './$types';
  import {enhance} from '$app/forms';

	export let form: ActionData;
	import InputField from '$lib/InputField.svelte';
	import FormCell from '$lib/FormCell.svelte';
	import CheckBox from '$lib/CheckBox.svelte';
	import Button from '$lib/Button.svelte';

</script>

<div id="create-page" class="mt-4 p-2 flex flex-col items-center">
	<div id="form-container" class="w-[800px] flex flex-col items-center gap-5">
		<header>
			<h1 class="text-4xl text-center font-bold text-[#222222]">Create your event here</h1>
		</header>
		{#if form?.success}
			<p>Successfully submitted</p>
		{/if}
    {#if form?.name.missing}
      <p>Event name missing</p>
    {/if}
		<form method="post" class="p-3 w-full grid grid-cols-2 justify-items-stretch gap-x-2 gap-y-6" use:enhance>
			<FormCell>
				<InputField
					label="Name of the event"
					type="text"
					name="name"
				/>
			</FormCell>
			<FormCell>
				<InputField
					label="Participant Limit"
					type="number"
					name="participantLimit"
				/>
			</FormCell>
			<FormCell>
				<InputField label="Venue" type="text" name="venue" isRequired={true} />
			</FormCell>
			<FormCell>
				<InputField
					label="Date of the event"
					type="date"
					name="date"
				/>
			</FormCell>
			<FormCell>
				<InputField
					label="Contact email"
					type="email"
					name="contactEmail"
				/>
			</FormCell>
			<FormCell>
				<InputField
					label="Organizer"
					type="text"
					name="organizer"
				/>
			</FormCell>
			<FormCell fullSpan={true}>
				<InputField
					label="Description"
					type="textarea"
					name="description"
				/>
			</FormCell>
			<FormCell fullSpan={true} isCentered={true}>
				<CheckBox
					name="agree"
					label="I have read and accept all the content included in the terms and conditions."
				/>
			</FormCell>
			<FormCell fullSpan={true} isCentered={true}>
				<Button type="submit">Create Event</Button>
			</FormCell>
		</form>
	</div>
</div>
