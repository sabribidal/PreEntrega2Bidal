const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: ''/* 'https://www.macstation.com.ar/img/productos/2492-2317-1.jpg' */,
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {id: '2', name: 'Samsung S21', price: 500, category: 'celular', img: '', stock: 3, description: 'Descripcion de Samsung S21'}
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

export const getProductsByCategory = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category))
        }, 500)
    })
}