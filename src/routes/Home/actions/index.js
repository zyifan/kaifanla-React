export function request () {
  return {
    type:'REQUEST'
  }
};
export function downRequest(){
  return {
    type:'DOWN_REQUEST'
  }
}
export function receive(data) {
  return {
    type:'RECEIVE',
    data
  }
};

export function reset(){
  return {
    type:'RESET'
  }
}

export function filter(filtertext) {
  return {
    type:'FILTER',
    filtertext
  }
};

export function haveMoreAction(){
  return {
    type:'HAVEMORE'
  }
}

export function setFiltertext(text){
  return {
    type:'SET_FILTERTEXT',
    text
  }
}

export function getMoreData(){
  return (dispatch,getState)=>{
    let {haveMore} = getState().home;
    if(getState().home.fetching) return;
    dispatch(request());
    if(haveMore){
      dispatch(haveMoreAction());
      fetch(dispatch,getState,'list1.json');
    }else{
      let timer;
      timer = setTimeout(function(){
        dispatch(downRequest());
        clearTimeout(timer);
      },1000);
    }
  }
}

function fetch(dispatch,getState,name){
  let json = require('../assets/'+name);
  let timer;
  timer = setTimeout(function(){
    dispatch(receive(json));
    clearTimeout(timer);
  },2000);
}

export function fetchData(){
  return (dispatch,getState)=>{
    if(getState().home.fetching) return;

    dispatch(request());

    fetch(dispatch,getState,'list.json');
  }
}

/*return fetch("",{
 method: "POST",
 headers : {
 'Content-Type': 'application/json',
 'Accept': 'application/json'
 }
 }).then(function(response){
 response.json()
 }).then(function(data){
 dispatch(receive(data))
 })
 .catch(function(e){ console.warn(e)})*/
