<script lang="ts">
	import InputField from '$lib/InputField.svelte';
	
  // Form field values
  let name = '';
  let participantLimit = '1';
  let venue = '';
  let date = '';
  let contactEmail = '';
  let organisor = '';
  let description = '';
</script>

<div id="create-page" class="mt-4 p-2 flex flex-col items-center">
	<div id="form-container" class="w-[80%] flex flex-col items-stretch">
		<header>
			<h1 class="text-4xl text-center font-bold text-[#222222]">Create your event here</h1>
		</header>
		<form method="post" class="grid grid-cols-2">
			<div class="cell">
				<InputField
					label="Name of the event"
					type="text"
					bind:value={name}
					name="name"
					isRequired={true}
				/>
			</div>
			<div class="cell">
				<InputField
					label="Participant Limit"
					type="number"
					bind:value={participantLimit}
					name="participantLimit"
					isRequired={true}
				/>
			</div>
			<div class="cell">
				<InputField
					label="Venue"
					type="text"
					bind:value={venue}
					name="venue"
					isRequired={true}
				/>
			</div>
      <div class="cell">
				<InputField
					label="Date of the event"
					type="date"
					bind:value={date}
					name="date"
					isRequired={true}
				/>
			</div>
      <div class="cell">
				<InputField
					label="Contact email"
					type="email"
					bind:value={contactEmail}
					name="contactEmail"
					isRequired={true}
				/>
			</div>
     <div class="cell">
				<InputField
					label="Organisor"
					type="text"
					bind:value={organisor}
					name="organisor"
					isRequired={true}
				/>
			</div>
     <div class="cell">
				<InputField
					label="Description"
					type="textarea"
					bind:value={description}
					name="description"
					isRequired={true}
				/>
			</div>
		</form>
	</div>
</div>
