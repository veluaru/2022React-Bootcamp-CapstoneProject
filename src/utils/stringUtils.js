export function routeSpacesAndAmpersantEncode(string) {
    const stringEncoded = string.replace("-", "&").split('_').join(' ')
    return stringEncoded
}
export function routeSpacesAndAmpersantDecode(string) {
    const stringDecoded = string.replace("&", "-").split(' ').join('_')
    return stringDecoded
}
