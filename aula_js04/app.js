const shoes = [
    { nome: 'Nike', preco: 200, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { nome: 'Adidas', preco: 120, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { nome: 'Puma', preco: 100, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { nome: 'Reebok', preco: 80, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { nome: 'Vans', preco: 60, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { nome: 'Converse', preco: 40, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' },
    { nome: 'Crocs', preco: 1, imagem: 'https://shoemix.fbitsstatic.net/img/p/tenis-casual-nike-air-max-intrlk-lit-branco-air-max-intrlk-lite-75448/291814-1.jpg?w=670&h=670&v=no-change&qs=ignore' }
]

const shoesList = document.getElementById('shoes-list')

shoes.forEach((shoe) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = shoe.imagem
    img.width = 100
    li.textContent = `${shoe.nome} - $${shoe.preco}`
    li.appendChild(img)
    shoesList.appendChild(li)
})