export default function(state = {}, action){
    switch(action.type){
                case "STORE_DATA":
                    return{
                        ...state,
                         userList: state.userList.concat(action.payload)
                    }
                    
                  
                    case "LOGIN_DATA":
                      return{
                          ...state,
                          userLoginList: state.userLoginList.concat(action.payload)
                      }
            default:
                    return state;               
    };
}