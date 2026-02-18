
function getRoles() {
    return fetch("https://mocki.io/v1/f6898b22-5a21-4380-a998-53839cef4103")
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            return ([])
        })

}

export default getRoles
