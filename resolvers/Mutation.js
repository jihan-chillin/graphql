const {v4 : uuid} = require('uuid');

exports.Mutation = {
    addCategory : (parent, {input}, {db}) =>{
        
        const {name} = input
        
        const newCategory = {
            id : uuid(),
            name
        }

        db.categories.push(newCategory)

        return newCategory
    },
    addProduct : (parent, {input}, {db})=>{
        const {name, image, price, onSale, quantity, categoryId, description} = input;

        const newProduct = {
            id : uuid(),
            name, 
            image, 
            price, 
            onSale, 
            quantity, 
            categoryId,
            description
        }

        db.products.push(newProduct);

        return newProduct;
    },
    addReview : (parent, {input}, {db}) =>{
        const {date,title,comment,rating, productId} = input;

        const newReviews = {
            id : uuid(),
            date,
            title,
            comment,
            rating,
            productId
        }

        db.reviews.push(newReviews);

        return newReviews;
    }
}