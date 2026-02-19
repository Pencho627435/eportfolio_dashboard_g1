function getFamiliasProfesionales() {
    return fetch("https://mocki.io/v1/04f52074-fb04-4fe8-be8d-8f4ac0f08249")
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            return ([])
        })

}

export default getFamiliasProfesionales