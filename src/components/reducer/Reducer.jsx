export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //remove after Finishing Developing... 
    token:null, //https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=960868834351319&height=300&width=300&ext=1666401826&hash=AeQmY_jglHJ9tt1NCr4

};
const reducer = (state,action) => { 
    console.log(action);
    
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }    
            default:
                return state;
    }
}
export default reducer;