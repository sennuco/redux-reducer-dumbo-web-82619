export function manageFriends(state={friends: []}, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {...state, friends:[...state.friends,action.friend ]}
      
    case 'REMOVE_FRIEND':
      const removeFriendByIndex = state.friends.findIndex(friends => friends.id === action.id)
      return ({...state, friends:[...state.friends.slice(0, removeFriendByIndex) , ...state.friends.slice(removeFriendByIndex + 1)]
        
      }
        )
    
    default:
    return state
  }
}
