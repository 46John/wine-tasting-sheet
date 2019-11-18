const _formatProduct = (product) => {
    let formattedProduct = {
        id: product.id,
        img: product.images[0].src,
        name: product.name,
        price: product.price,
        customPrice: product.price,
        categories: product.categories,
        tastingNotes: product.wine_notes,
        ratings: product.wine_ratings
    };
    return formattedProduct;
}

const fetchProducts = () => {
    return fetch('https://devstsupery.wpengine.com/wp-json/wc/v2/products',{
        headers:{
            'Authorization' : 'Basic Y2tfYjQ3MTA1NzQ3OTkzMTIyMGY2MTRlZThkODUyNzc0Nzg4ZTcyNTU3Yjpjc19hODIxMDZhNDYyNTQ2ZDVhYzIzMTg0MGJhNTNmZjAxN2UzZTkzYmQw'
        }
    })
    .then((response)=> {
        if(!response.ok){
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data)=> {
        let products = [];
        data.forEach((product) => {
            products.push(_formatProduct(product));
        });
        return products;
    }).catch((error) => {
        console.log("There was an error fetching your data: ", error);
    });
}

export default fetchProducts;