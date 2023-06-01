export const removeDuplicatedCategories = (array) => {
    let seen = {};
    return array.filter(function(item){
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
};

export const flattenCategories = (array) => {
    return [...new Set(array.map(item => {
        return item.categories;
    }))].flat(1);
}