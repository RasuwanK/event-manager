<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';
	import Error from '$lib/Error.svelte';
	import { page } from '$app/stores';

	// Obtaining all the form action return values
	export let form: ActionData;
	// If not successfull form returns validation errors
	// State of the form
	import InputField from '$lib/InputField.svelte';
	import FormCell from '$lib/FormCell.svelte';
	import CheckBox from '$lib/CheckBox.svelte';
	import Button from '$lib/Button.svelte';
</script>

<div id="create-page" class="mt-4 p-2 flex flex-col items-center">
	<div id="form-container" class="w-[95%] md:w-[80%] lg:w-[800px] flex flex-col items-center gap-5">
		<header>
			<h1 class="text-4xl text-center font-bold text-[#222222]">Create your event here</h1>
		</header>
		<div id="status" class="h-8">
			{#if form?.success}
				<span class="text-[#222222] text-sm">Event created successfully</span>
			{:else if $page.status === 500}
				<span class="text-red-800 text-sm">Oops something happened (500 error)</span>
			{/if}
		</div>
		<form
			method="post"
			class="p-3 w-full grid grid-cols-1 lg:grid-cols-2 justify-items-stretch gap-x-2 gap-y-6"
			use:enhance
		>
			<FormCell>
				<div class="h-5">
					{#if form?.validationErrors?.name.invalid}
						<Error
							name="name"
							invalid={form?.validationErrors?.name.invalid}
							empty={form?.validationErrors.name.value ? false : true}
							invalidMessage="Must only contain letters, spaces, and numbers"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors.name.value}
					label="Name of the event"
					type="text"
					name="name"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<div class="h-5">
					{#if form?.validationErrors?.participantLimit.invalid}
						<Error
							name="participantLimit"
							invalid={form?.validationErrors.participantLimit.invalid}
							empty={form?.validationErrors.participantLimit.value ? false : true}
							invalidMessage="Must only contain numbers"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.participantLimit.value}
					label="Participant Limit"
					type="number"
					name="participantLimit"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<div class="h-5">
					{#if form?.validationErrors?.venue.invalid}
						<Error
							name="venue"
							invalid={form?.validationErrors.venue.invalid}
							empty={form?.validationErrors.venue.value ? false : true}
							invalidMessage="Must only contain letters, spaces, and numbers"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.venue.value}
					label="Venue"
					type="text"
					name="venue"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<div class="h-5">
					{#if form?.validationErrors?.date.invalid}
						<Error
							name="date"
							invalid={form?.validationErrors.date.invalid}
							empty={form?.validationErrors.date.value ? false : true}
							invalidMessage="Must be in the format YYYY-MM-DD"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.date.value}
					label="Date of the event"
					type="date"
					name="date"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<div class="h-5">
					{#if form?.validationErrors?.contactEmail.invalid}
						<Error
							name="contactEmail"
							invalid={form?.validationErrors.contactEmail.invalid}
							empty={form?.validationErrors.contactEmail.value ? false : true}
							invalidMessage="Invalid email"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.contactEmail.value}
					label="Contact email"
					type="email"
					name="contactEmail"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<div class="h-5">
					{#if form?.validationErrors?.organizer.invalid}
						<Error
							name="organizer"
							invalid={form?.validationErrors?.organizer.invalid}
							empty={form?.validationErrors?.organizer.value ? false : true}
							invalidMessage="Must contain only letters"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.organizer.value}
					label="Organizer"
					type="text"
					name="organizer"
					isRequired={true}
				/>
			</FormCell>

			<FormCell fullSpan={true}>
				<div class="h-5">
					{#if form?.validationErrors?.organizer.invalid}
						<Error
							name="description"
							invalid={form?.validationErrors.description.invalid}
							empty={form?.validationErrors.description.value ? false : true}
							invalidMessage="Must contain only letters, spaces and numbers"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.description.value}
					label="Description"
					type="textarea"
					name="description"
					isRequired={true}
				/>
			</FormCell>
			<FormCell fullSpan={true} isCentered={true}>
				<div class="h-5">
					{#if form?.validationErrors?.price.invalid}
						<Error
							name="price"
							invalid={form?.validationErrors.price.invalid}
							empty={form?.validationErrors.price.value ? false : true}
							invalidMessage="Must only contain numbers"
							emptyMessage="Fill out this field"
						/>
					{/if}
				</div>
				<InputField
					value={form?.validationErrors?.price.value}
					label="Price of the ticket"
					type="text"
					name="price"
					isRequired={true}
				/>
			</FormCell>
			<FormCell fullSpan={true} isCentered={true}>
				<div class="h-5">
					{#if form?.validationErrors?.agree.invalid}
						<Error
							name="agree"
							invalid={form?.validationErrors.agree.invalid}
							empty={form?.validationErrors.agree.value ? false : true}
							invalidMessage="Must contain a valid tick"
							emptyMessage="You must read and agree with the terms and conditions"
						/>
					{/if}
				</div>
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
