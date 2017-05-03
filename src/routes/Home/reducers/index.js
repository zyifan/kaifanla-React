let initialState = {
  fetching:false,
  haveMore:true,
  filtertext:'',
  list:[],
  oList:[]
};
function list(state=initialState,action){
  switch(action.type){
    case 'REQUEST':
          return {
            ...state,
            fetching:true
          };
    case 'DOWN_REQUEST':
          return {
            ...state,
            fetching:false
          };
    case 'RECEIVE':
          let lists = state.list.concat(action.data);
          if(!!state.filtertext){
            lists = lists.filter(function(v){
              let name = v.name.slice(1,-1);
              return name.indexOf(state.filtertext) > -1;
            })
          }
          return{
            ...state,
            fetching:false,
            list:lists,
            oList:state.oList.concat(action.data)
          }
    case 'FILTER':
          let list = state.list.filter(function(v){
            let value = v.name.slice(1,-1);
            return value.indexOf(action.filtertext) > -1;
          });
          return {
            ...state,
            list
          }
    case 'HAVEMORE':
          return {
            ...state,
            haveMore:false
          }
    case 'RESET':
          return {
            ...state,
            list:state.oList
          }
    case 'SET_FILTERTEXT':
          return {
            ...state,
            filtertext:action.text
          }
    default:
          return state;
  }
}

export default list;
