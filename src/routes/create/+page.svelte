<script lang="ts">
  import InputField from '$lib/InputField.svelte';
</script>

<div id="create-page" class="mt-4 p-2 flex flex-col items-center">
	<div id="form-container" class="w-[80%] flex flex-col items-stretch">
		<header>
			<h1 class="text-4xl text-center font-bold text-[#222222]">Create your event here</h1>
		</header>
		<form method="post" class="grid grid-cols-2">
			<div class="cell">
        <InputField />
			</div>
			<div>
				<label for="participantLimit">Participant limit</label>
				<input id="participantLimit" name="participantLimit" type="number" required />
			</div>
			<div>
				<label for="venue">Venue</label>
				<input id="venue" name="venue" type="text" required />
			</div>
			<div>
				<label for="date">Date</label>
				<input id="date" name="date" type="date" required />
			</div>
			<div>
				<label for="contactEmail">Contact email</label>
				<input id="contactEmail" name="contactEmail" type="email" required />
			</div>
			<div>
				<label for="organizor">Organizor</label>
				<input id="organizor" name="organizor" type="text" />
			</div>
			<div class="col-start-1 col-end-3">
				<label for="description">Description</label>
				<textarea id="description" name="description" />
			</div>
		</form>
	</div>
</div>
