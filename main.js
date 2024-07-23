fetch('https://apiv1.biblusi.ge/api/book?best=1&author=1&rate=1&category=1')
.then((result) => result.json())
.then((data) =>{
    data.data.forEach(response =>{
        let items = document.getElementById('items');

        items.innerHTML += `
        <div class="item">
                <div class="img">
                    <img src="${response.min_picture}" alt="">
                </div>
                <h4>${response.name}</h4>
                <p></p>
                <h2>${response.p}₾</h2>
        </div>`
    })
})


fetch("https://apiv1.biblusi.ge/api/blog?limit=6")
.then((results) => results.json())
.then((main) =>{
      main.data.forEach(mainInner =>{
        let mainThree = document.getElementById('main-three-items');
        console.log(mainInner)
        mainThree.innerHTML += `
        <div class="item">
                <div class="left-side">
                    <img src="${mainInner.image}" alt="">
                </div>
                <div class="right-side">
                    <h3>${mainInner.title}</h3>
                    <h4>${mainInner.text}...</h4>
                    
                    <div class="clock">
                        <i class="bi bi-clock"></i>
                        <p>30/11/2023</p>
                    </div>
                </div>
            </div>   `
      })
})