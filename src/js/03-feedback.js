import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const keyStorage = "feedback-form-state";

let currentData;

form.addEventListener('input', throttle(onInput,500));
 

const currentLocalData = JSON.parse(localStorage.getItem(keyStorage));


if (currentLocalData) {
    form.email.value = currentLocalData.email;
    form.message.value = currentLocalData.message;
    currentData = {
        email:form.email.value,
        message:form.message.value,
    };
};

    
function onInput(event) {
   currentData = {
        email:event.target.value,
        message:event.target.value,
    };
    localStorage.setItem(keyStorage, JSON.stringify(currentData));
};


form.addEventListener('submit', onSubmit);

function onSubmit() {
    
   console.log(currentData); 
    localStorage.removeItem(keyStorage);
    reset(form);
  
};



