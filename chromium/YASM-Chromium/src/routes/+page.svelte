<script lang="ts">

    import {  
        addthreatIntelligencePlatform 
    } from '$lib/threatIntelligencePlatforms';

    const threatIntelligencePlatforms: URL[] = $state([])

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        addthreatIntelligencePlatform(formData, threatIntelligencePlatforms);
        }

</script>

<h1>YASM</h1>

<form onsubmit={handleSubmit}>
	<label>
		Add a new threat intelligence URL to query:
		<input
            type="text"
			name="URL"
			autocomplete="off"
		/>
	</label>
    <button type="submit"> Add </button>
</form>


{#if threatIntelligencePlatforms}
    {#each threatIntelligencePlatforms as threatIntelligencePlatform}
        <p>{threatIntelligencePlatform.href}</p>
    {/each}
{/if}