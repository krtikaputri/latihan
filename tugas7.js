const number = [1,2,3,4,5,6,7,5,7,4,5,6,4,5,5]
function filter() {
    const filnum = number.filter(el => {
        return el >  5
    })
    console.log(filnum)
}
filter()