function introduction(name) {
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
const defaultLang = "JavaScript" 
function introductionWithLanguageOptional(name, language) {
    if (language === undefined) {
        return `Hi, my name is ${name} and I am learning to program in ${defaultLang}.`
            }
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}