const toys = [
  {
    id: 1,
    name: "Teddy Bear",
    maker: "Target",
    price: 20,
    weight: 2.1,
    stock: true
  },

  {
    id: 2,
    name: "Malibu Barbie",
    maker: "Mattel, Inc.",
    price: 30.5,
    weight: 5,
    stock: true
  },

  {
    id: 3,
    name: "Furby",
    maker: "Hasbro",
    price: 90,
    weight: 6.6,
    stock: false
  },
];

const addToyToInventory = (toyObject) => {
  const lastIndex = toys.length - 1
  const currentLastToy = toys[lastIndex]
  const maxId = currentLastToy.id
  const idForNewToy = maxId + 1

toyObject.id = idForNewToy
toys.push(toyObject)

}

const nintendoSwitch = {
    id: 4,
    name: "Nintendo Switch",
    maker: "Nintendo",
    price: 200,
    weight: 2,
    stock: true
}

addToyToInventory(nintendoSwitch)

const yoyo = {
    id: 5,
    name:"Yoyo",
    price: 10.50,
    weight: .5,
    stock: true
}

addToyToInventory(yoyo)


const handmadeBlocks = {
  name: "Handmade Blocks",
  price: 30,
  weight: 5,
  stock: true
}

addToyToInventory(handmadeBlocks)  


for (const toy of toys) {
  toy.price = toy.price * 1.05 
  
  console.log(`The ${toy.name} costs $${toy.price} and there id is ${toy.id}.`)
}