//permet de  cree une validation sur les inputs
const validationFormCategoryArray = () => {
    //on recupere les input name du formProduct 
    const inputs = document.querySelectorAll('input');
    //ensuite on fait un talbeau avec leur name
    return Array.from(inputs).map(input => input.name);
  }

const formCategory = `
    <form class="form-modal" name="add-category" id="add-category">
        <div class="modal-content">
            <h1 class="title-modal">Nouvelle Catégorie</h1>
            <div>
                <label for="category">Catégorie</label>
                <input type="text" name="category" id="category-form">
                <p class="error category-error"></p>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btnCloseModal btn-danger">Annuler</button>
            <button class="btnAddCategory btn-primary" type="submit" >Ajouter</button>
        </div> 
    </form>
`;

export { formCategory, validationFormCategoryArray };