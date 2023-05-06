<script lang="ts">
	import InputField from '$lib/InputField.svelte';
	import FormCell from '$lib/FormCell.svelte';
  import CheckBox from '$lib/CheckBox.svelte';
	// Form field values
	let name = '';
	let participantLimit = '1';
	let venue = '';
	let date = '';
	let contactEmail = '';
	let organizer = '';
	let description = '';
  let checked = false;
</script>

<div id="create-page" class="mt-4 p-2 flex flex-col items-center">
	<div id="form-container" class="w-[800px] flex flex-col items-center gap-5">
		<header>
			<h1 class="text-4xl text-center font-bold text-[#222222]">Create your event here</h1>
		</header>
		<form method="post" class="p-3 w-full grid grid-cols-2 gap-x-2 gap-y-6">
			<FormCell>
				<InputField
					label="Name of the event"
					type="text"
					bind:value={name}
					name="name"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<InputField
					label="Participant Limit"
					type="number"
					bind:value={participantLimit}
					name="participantLimit"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<InputField label="Venue" type="text" bind:value={venue} name="venue" isRequired={true} />
			</FormCell>
			<FormCell>
				<InputField
					label="Date of the event"
					type="date"
					bind:value={date}
					name="date"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<InputField
					label="Contact email"
					type="email"
					bind:value={contactEmail}
					name="contactEmail"
					isRequired={true}
				/>
			</FormCell>
			<FormCell>
				<InputField
					label="Organizer"
					type="text"
					bind:value={organizer}
					name="organizer"
					isRequired={true}
				/>
			</FormCell>
			<FormCell fullSpan={true}>
				<InputField
					label="Description"
					type="textarea"
					bind:value={description}
					name="description"
					isRequired={true}
				/>
			</FormCell>
			<FormCell fullSpan={true}>
        <CheckBox name="agree" bind:isChecked={checked} label="I have read and accept all the content included in the terms and conditions." />
			</FormCell>
		</form>
	</div>
</div>
