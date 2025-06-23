/**
 * Adds a new threat intelligence platform URL to a threatIntelligencePlatforms array
 *
 * @param event - A Submit Form Event with the threat intelligence platform URL
 * @param threatIntelligencePlatforms - An array of URLs to push the new URL to
 */
export function addthreatIntelligencePlatform(formData: FormData, threatIntelligencePlatforms: URL[]){
    const formInput: string | undefined = formData.get("URL")?.toString()
    if (formInput){
        try{
            const platformURL: URL = new URL(formInput)
            threatIntelligencePlatforms.push(platformURL)
        } catch(error){ // TODO better handling needed
            if (typeof window !== 'undefined') {
                console.error(error);
                if (error instanceof Error) {
                    alert(`Unable to add platform "${formInput}". ${error.message}. Is this a valid URL?`); // TODO Make this a Toast notification.
                    } else {
                    alert(`Unable to add platform "${formInput}. Is this a valid URL?`); // TODO Make this a Toast notification.
                }
            }
        }
    }
}