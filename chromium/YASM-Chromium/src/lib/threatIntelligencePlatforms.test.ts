import { it, expect } from 'vitest';
import { addthreatIntelligencePlatform } from "./threatIntelligencePlatforms";

const threatIntelligencePlatforms: URL[] = [];

it('Should add a new threat intel platform', () => {

    const THE_ONLY_URL: string = "https://www.virustotal.com/gui/search/"
    const formData = new FormData()
    formData.set("URL", THE_ONLY_URL)

    addthreatIntelligencePlatform(formData, threatIntelligencePlatforms);
    
    expect(threatIntelligencePlatforms.length).toEqual(1);
    expect(threatIntelligencePlatforms[0].href).toEqual(THE_ONLY_URL);
});