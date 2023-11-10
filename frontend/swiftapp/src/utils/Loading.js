

export default function setisloading(state){
var loading_view=document.getElementById('loading-view');




    if(state){
loading_view.style.display='none'

    }

    else{

        loading_view.style.display='block'

    }
}