const number = [100,25,16,56,87]
function kali() {
    const perkalian = number.map(item => {
        return item - 100
    }
    )
    console.log(perkalian);
}
kali()