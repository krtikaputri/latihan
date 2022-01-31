const person = ['kaila', 'sit', 'jamilah', 'kaila', 'siti', 'jamilah',]
 function filname() {
     const filter = person.filter(el => {
         return el === `kaila`
     })
     console.log(filter);
 }
 filname()