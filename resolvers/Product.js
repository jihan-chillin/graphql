exports.Product = {
    category : ( {categoryId}, args, {db}) =>{
        return db.categories.find(category => category.id === categoryId);
    },
    reviews : ({id}, args, {reviews})=>{
        return db.reviews.filter(review=> review.productId === id);
    }
}