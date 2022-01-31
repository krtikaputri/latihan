const myobj = [
     { name: 'shark', likes: 'ocean'},
      { name: 'whale', likes: 'ocean'},
      { name: 'turtle', likes: 'pond'},
      { name: 'otter', likes: 'fish biscuits'},
      { name: 'lion', likes: 'land'},
      { name: 'nemo', likes: 'ocean'},  
]

const filter =myobj.filter(item => {
    return item.likes == 'ocean'
})
console.log(filter)