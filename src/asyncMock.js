const products = [
    {
        id: '1',
        name: 'Te Verde',
        price: 1000,
        category: 'green',
        img: 'https://o.remove.bg/downloads/70e66913-6810-4c2c-936f-266aa4747420/image-removebg-preview.png',
        stock: 1,
        description: 'Descripcion de Te Verde'
    },
    {id: '2', name: 'Te de Limon', price: 500, category: 'green', img: 'https://o.remove.bg/downloads/71ed43e1-c969-498e-ac95-c7cdca821555/image-removebg-preview.png', stock: 3, description: 'Descripcion de Te Verde'},
    {id: '3', name: 'Te Negro', price: 500, category: 'black', img: 'https://o.remove.bg/downloads/a466501e-8470-4517-93ca-60847c191349/image-removebg-preview.png', stock: 2, description: 'Descripcion de Te Negro'},
    {id: '4', name: 'Te de Cedron', price: 500, category: 'blue', img: 'https://o.remove.bg/downloads/419f4d7e-564c-418b-a1b3-914d8391f153/image-removebg-preview.png', stock: 1, description: 'Descripcion de Te de Cedron'}
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