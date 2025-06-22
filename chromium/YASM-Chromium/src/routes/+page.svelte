<script lang="ts">

    import {  
        addthreatIntelligencePlatform 
    } from '$lib/threatIntelligencePlatforms';

    const threatIntelligencePlatforms: URL[] = $state([])

</script>

<form onsubmit={(event) => addthreatIntelligencePlatform(event, threatIntelligencePlatforms)}>
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