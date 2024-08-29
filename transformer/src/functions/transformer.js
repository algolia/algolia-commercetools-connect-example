
// This is called from the controller for every variant
export const transform = (algoliaProduct) => {
    algoliaProduct.transformed = 'transformed';
    return algoliaProduct;
}