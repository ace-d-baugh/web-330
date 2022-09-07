export class ShoppingCart {
   constructor() {
      this.products = [];
   }
   
   count() {
      return this.products.length;
   }

   add(product) {
      this.products.push(product);
   }

   *generator() {
      for (let product of this.products) {
         yield product;
      }
   }
}