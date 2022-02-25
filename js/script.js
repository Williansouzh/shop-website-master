const menu = document.querySelector('.navMenu').addEventListener('click', ()=>{
    if(document.querySelector('.menu').style.display=='none'){
        document.querySelector('.menu').style.display = 'flex';
    } else{
        document.querySelector('.menu').style.display = 'none';
    }
})