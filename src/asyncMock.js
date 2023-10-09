const products = [
    {
        id: '1',
        name: 'Te Verde',
        price: 1000,
        category: 'green',
        img: 'https://www.inti-tea.com/cdn/shop/products/DSC6272c_700x700.jpg?v=1686165523',
        description: 'Descripcion de Te Verde'
    },
    {id: '2', name: 'Te Verde', price: 500, category: 'green', img: 'https://www.inti-tea.com/cdn/shop/products/DSC6272c_700x700.jpg?v=1686165523', stock: 3, description: 'Descripcion de Te Verde'},
    {id: '3', name: 'Te Negro', price: 500, category: 'black', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AIVe_Nsa5lqymO1SDOQudSP-5qMmnbjdQCkpeDOioxJs3IqyEJuGqK9H-fQSr6vtEBI&usqp=CAU', stock: 3, description: 'Descripcion de Te Negro'},
    {id: '4', name: 'Te de Cedron', price: 500, category: 'blue', img: 'https://www.inti-tea.com/cdn/shop/products/DSC0430_669x669.jpg?v=1660662839', stock: 3, description: 'Descripcion de Te de Cedron'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCat) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCat))
        }, 2000)
    })
}