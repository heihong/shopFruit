
export class Projet {
    produit = {
        pommes : 1,
        bananes: 1.5,
        cerises: 0.75
    }

    reduction = {
        cerises : 20,
        bananes : 30
    }

    som(produits){
        return produits.reduce((accumulator, currentValue) => {
        return accumulator + this.produit[currentValue] *100;
        }, 0);
    }

    somReduction(arrayproduitReduction, produitReduction){
        if(arrayproduitReduction.length >= 2){
            let nblot = this.nblot(arrayproduitReduction);
            return this.som(arrayproduitReduction)-this.reduction[produitReduction]*nblot;
        }
    }
    
    nblot(arrayproduitReduction){
        return Math.trunc(arrayproduitReduction.length / 2)
    }

    somWithReduction(produits, produitReduction){
        let tabWithoutProduitReduction = produits.filter((el)=>el!==produitReduction);
        return this.som(tabWithoutProduitReduction) + this.somReduction(produits.filter((el)=>el===produitReduction), produitReduction);
    }
    



}