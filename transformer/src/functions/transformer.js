
// This is called from the controller for every variant
export const transform = (variant) => {
    variant.transformed = 'transformed';
    return variant;
}