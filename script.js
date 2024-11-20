// Reference to the elements

// button 'plus'
const buttons = document.querySelectorAll('.MoreInfo')
const texts = document.querySelectorAll('.HiddenText');

// Click event
buttons.forEach((button, index) =>{
    button.addEventListener('click', ()=> {
        const text = texts[parseInt(button.id)];
        let img = null;
        //
        if(button.matches('h2')){
            img = buttons[index+1].querySelector('img');
        }
        else{
            img = button.querySelector('img');
        }
        if(img.src.endsWith('icon-plus.svg')){
            text.style.display='block';
            img.src = '/assets/images/icon-minus.svg';
        }
        else{
            text.style.display='none';
            img.src = '/assets/images/icon-plus.svg';
        }
        
    })
})
