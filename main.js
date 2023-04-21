//1 C is for Cookie
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let y = 0; y > cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

//2 Conjunction Function
const conjunction = function (firstWord, secondWord) {
  const conjoinedWord = `${firstWord} ${secondWord}`
  
  console.log(conjoinedWord)
}

conjunction("Master", "Card")


//3 Mod Squad
{
  const modSquad = {
      "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
      "series": {
          "start": "1968",
          "end": "1973"
      }
  }

  let HTMLRepresentation = `<h1>The Mod Squad</h1>`

  modSquad.members.forEach(member => {
      HTMLRepresentation += `<div>${member}</div>`
      console.log(HTMLRepresentation)
  })
}




//4 Simon Says

const locations = [[4,1], [1,2], [5,3], [2,1], [2,2], [2,3]]

for (const location of locations) {

    if (location[0] > 2) {
        console.log("This location is invalid")
    }
  }


//5 llamaNamer

const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)

  const namer = function () {
      const suffix = " the Llama"
      const name = possibleNames[randomizer]
      
      return name + suffix
  }

  return namer()
  
}

  const nameMaker = llamaNamer()
  console.log(nameMaker)
