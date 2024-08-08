export const chatResponse = value => {
    console.log(value)
    const lowerCaseValue = value.toLowerCase()
    switch (lowerCaseValue) {
        case 'images':
            return 'What kind of images you want?'
        case 'forest':
            return 'Select your type of quality'
        case 'hd':
            return 'we have 3 images of forest, would you like to see them?'
        default:
            return "Sorry, we couldn't understand what you said. Can you tell us again about it!"
            break;
    }
}