/**
 * Adds a new threat intelligence platform URL to a threatIntelligencePlatforms array
 *
 * @param event - A Submit Form Event with the threat intelligence platform URL
 * @param threatIntelligencePlatforms - An array of URLs to push the new URL to
 */
export function addthreatIntelligencePlatform(event: SubmitEvent, threatIntelligencePlatforms: URL[]){
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