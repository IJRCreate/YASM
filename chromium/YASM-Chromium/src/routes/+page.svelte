<script lang="ts">

    let threatIntelligencePlatforms: URL[] = $state([]);

    function addthreatIntelligencePlatform(event: SubmitEvent){
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const formInput: string | undefined = formData.get("URL")?.toString()
        if (formInput){
            try{
                const platformURL: URL = new URL(formInput)
                threatIntelligencePlatforms.push(platformURL)
            }catch(error){
                console.error(error);
                if (error instanceof Error) {
                    alert(`Unable to add platform "${formInput}". ${error.message}. Is this a valid URL?`); // TODO Make this a Toast notification.
                    } else {
                    alert(`Unable to add platform "${formInput}. Is this a valid URL?`); // TODO Make this a Toast notification.
                }
            }
        }
    }

</script>

<form onsubmit={addthreatIntelligencePlatform}>
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