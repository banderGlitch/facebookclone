export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });


  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });

  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });

  

  export const RegistrationStart = (userCredentials) => ({
    type: "REGISTRATION_START",
  });


  
  export const RegistrationSuccess = (user) => ({
    type: "REGISTRATION_SUCCESS",
    payload: user,
  });

  export const RegistrationFailure = () => ({
    type: "REGISTRATION_FAILURE",
  });
  

  
