
const initialState={
    post:[],
    postdetails:[],

};
const postreducer=(state=initialState,action)=>{
switch(action.type){
   case "FETCH_POST_SUCCESS":
    return{
        ...state,
        post:action.payload,
    };
    case "FETCH_POST_DETAILS_SUCCESS":
    return{
        ...state,
        postdetails:action.payload,
    };
        default:
        return state;
};
}
export default postreducer;