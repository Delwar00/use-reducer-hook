
export const msgInitialize={
    name:'',
    email:'',
    skill:'',
    error:false
}
export const msgReducer=(state,{type,payload})=>{
    // console.log(action.payload);
    
    switch(type){
    case 'DEV_DATA_LOAD':
      return state={...state,...payload};
    case 'ALERT_LOAD':
      let error_data=(payload.error==='Start')?true:false;
      return state={...state,error:error_data};
    default:
        return state;
    }
}