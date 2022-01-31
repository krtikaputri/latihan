const number = [1,2,3,4,5,6,7,8,9,5,4,6,7,3,5,]
function filter() {
    const filnum = number.filter(el => {
        return el === 5
    })
    console.log(filnum)
}
filter()