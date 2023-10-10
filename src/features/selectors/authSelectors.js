const getCurrentUser = ((state => state.auth.user))
const getErrorMessage = ((state => state.auth.errorMessage))
const getSuccessMessage = ((state => state.auth.successMessage))
const getIsLoggedIn = ((state => state.auth.isLoggedIn))

export {
    getCurrentUser,
    getIsLoggedIn,
    getErrorMessage,
    getSuccessMessage
}