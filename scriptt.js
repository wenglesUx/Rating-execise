let note = 0;
let tt = document.querySelectorAll('#notes input');
let reset = document.querySelector('#btn-reset'); 


function insert(x){
    note = x; 
}
let pageone = document.querySelector('.rating-area')
let pagetwo = document.querySelector('.subArea')
let submit = document.querySelector('#btn-sub')

function action(){
    pageone.style.display ='none'
    pagetwo.style.display ='block'
    document.querySelector('span').innerHTML =`  You selected ${note} out of ${tt.length}`
}

submit.addEventListener('click',()=>{
action()

})



reset.addEventListener('click',rst)
function rst(){
    pageone.style.display ='block'
    pagetwo.style.display ='none'
}