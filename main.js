const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
xhr.onload= function(){
    const response = JSON.parse(xhr.responseText);

    let template ="";
    for(let i=0; i<252; i++){
        let id = response[i].thumbnailUrl;
        let title = response[i].title;
        template += `
        <div style="text-align">
            <img src="${id}" style="margin-right: 50px;">
            <div style="width:150px">
            <p style="overflow:auto">${title}</p>
            </div>
        </div>`
       
    }
    document.querySelector("#my-container").innerHTML = template
    
    
}
xhr.send()
