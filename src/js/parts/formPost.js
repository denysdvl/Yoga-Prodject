function formPost() {
    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
    let form = document.querySelector('.main-form'),
        contact = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function PostDataForm(elementItem) {
        elementItem.addEventListener('submit', (event) => {
            let eventForm = event,
                target = event.target;
            eventForm.preventDefault();
            
            target.appendChild(statusMessage);
            let dataForm = new FormData(target);

            function postData(formData) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', '../../server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    let obj = {};
                    formData.forEach((value, key) => {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    console.log(json);
                   
                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status === 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(json);
                });
            } // end postData
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(dataForm)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);


        });
    }
    PostDataForm(form);
    PostDataForm(contact);
}
module.exports = formPost;