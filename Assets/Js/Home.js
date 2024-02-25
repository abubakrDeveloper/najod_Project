
const servHeadDiv = document.querySelector('.home_btn_box')

for (let i = 0; i < serviceData.length; i++) {
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    const div = document.createElement('div');
    h1.textContent = serviceData[i].title;
    p.textContent = serviceData[i].description;
    div.appendChild(h1);
    div.appendChild(p);
    div.classList.add('service-box'); 
    servHeadDiv.appendChild(div);
}   
