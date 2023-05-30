export const removeDuplicatedCategories = (array) => {
    let seen = {};
    return array.filter(function(item){
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
};