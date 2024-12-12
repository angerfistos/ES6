export function categoryOptions(list) { //on cree les options pour les passer dans le select
    const category = document.getElementById('category');
    const categories = Object.keys(list.products);
    categories.map((c) => {
        const option = document.createElement('option');
        option.setAttribute('value', c);
        option.innerHTML = c;
        category.add(option);
        return c;
    });
}

  //permet de  cree une validation sur les inputs
export function validationFormProductArray(){
    //on recupere les input name du formProduct 
    const inputs = document.querySelectorAll('input, select');
    //ensuite on fait un talbeau avec leur name
    return Array.from(inputs).map(input => input.name);
}
    
const formProduct = `
    <form class="form-modal" name="add-product" id="add-product">
        <div class="modal-content">
            <h1 class="title-modal">Nouvelle Entrée</h1>
            <div>
                <label for="category">Catégorie</label>
                <select name="category" id="category">
                    <option value="">...choisir</option>
                </select>
                <p class="error category-error"></p>
            </div>       
            <div>
                <label for="product">Nom</label>
                <input type="text" name="product" id="product">
                <p class="error product-error"></p>
            </div>         
            <div>
                <label for="price">Prix</label>
                <input type="number" step="0.01" name="price" id="price">
                <p class="error price-error"></p>
            </div>      
            <div>
                <label for="quantity">Quantité</label>
                <input type="number"  name="quantity" id="quantity">
                <p class="error quantity-error"></p>
            </div>
            
        </div>
        <div class="modal-footer">
            <button class="btnCloseModal btn-danger">Annuler</button>
            <button class="btnAddProduct btn-primary" type="submit" >Ajouter</button>
        </div>
    </form>
`;

export default formProduct;