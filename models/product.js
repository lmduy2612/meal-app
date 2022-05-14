class Product {
    constructor(id, categoryId, title, thumb, view, favorite, intro, ingedients,  instructions) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title; 
        this.thumb = thumb;
        this.intro = intro;
        this.ingedients = ingedients;
        this.instructions = instructions;
        this.view = view;
        this.favorite = favorite;
    }
}

export default Product;