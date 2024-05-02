const AuthReducer = (state, action) => {
    switch (action.type) {
        // LOGIN CASE
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };

        // REGISTRATION CASE 
        case "REGISTRATION_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };

        case "REGISTRATION_SUCCESS":
            return {
                user: null,
                isFetching: false,
                error: false
            };

        case "REGISTRATION_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };


        default:
            return state;
    }
}

export default AuthReducer;