const openPopUp = document.getElementById('open_bota');
const closePopUp = document.getElementById('bota_close');
const popUp = document.getElementById('bota');

openPopUp.addEventListener('click', function(e){
    e.preventDefault;
    popUp.classList.add('active');
})
closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('active');
})