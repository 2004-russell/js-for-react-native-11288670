// userInfo.js

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1, // Auto-incremented ID starting from 1
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}



module.exports = {
    createUserProfiles
};
