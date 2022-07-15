const data = [
    { id:1,
      name: 'Jane Doe',
      job:'web developer',
      image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg', 
      info:'I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },
    { id:2,
        name: 'anna johnson',
        job:'web developer',
        image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg', 
        info:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'
      },
      { id:3,
        name: 'peter jones',
        job:'intern',
        image:'	https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg', 
        info:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.'
      },
      { id:4,
        name: 'bill anderson',
        job:'the boss',
        image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg', 
        info:'I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
      },
      { id:5,
        name: 'Jane Doe',
        job:'web developer',
        image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg', 
        info:'I am baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
      },
  
  ];
  const getData=document.querySelector('.article');
  

  let Id = 0 ;

  window.addEventListener("DOMContentLoaded", function () {
    let showDataItems =''; 
    const dataItem = data[Id];
    showDataItems+=`
    <div class="img-container">
                <img  src="${dataItem.image}" class="article__img" alt=""></img>
            </div>
            <h4 class="article__name">${dataItem.name}</h4>
            <p class="article__jobs">${dataItem.job}</p>
            <p class="article__info">${dataItem.info}</p>
            <div class="article__btn">
               <button onclick="btnLeft()" class="article__btn--left"> <li><</li></button>
               <button onclick=" btnRight()" class="article__btn--right"> <li>></li></button>
            </div>
            <button onClick="randomData()" class="btn">Surprise Me</button>
    `
  getData.innerHTML=showDataItems;
  });
  function renderUI(getId){
    let updateDataItem =''; 
    let dataItem=data[getId];
    updateDataItem+=`
    <div class="img-container">
    <img  src="${dataItem.image}" class="article__img" alt=""></img>
            </div>
            <h4 class="article__name">${dataItem.name}</h4>
            <p class="article__jobs">${dataItem.job}</p>
            <p class="article__info">${dataItem.info}</p>
            <div class="article__btn">
               <button onclick="btnLeft()" class="article__btn--left"> <li><</li></button>
               <button onclick=" btnRight()" class="article__btn--right"> <li>></li></button>
            </div>
            <button onClick="randomData()" class="btn">Surprise Me</button>
    `
  getData.innerHTML=updateDataItem;
  }

  function btnLeft(){
    Id=parseInt(Id)-1;
    if(Id < 0){
      Id=data.length-1;
    }
    let idLeft=Id;
    renderUI(idLeft)
// console.log(idLeft)
  }
  function btnRight(){
    Id=parseInt(Id)+1;
    if(Id > data.length -1){
      Id=0;
    }
    let idRight=Id;
       renderUI(idRight);
    // console.log(idRight)
      }

      function randomData(){
         let idRandom=Math.floor(Math.random()*data.length);
         renderUI(idRandom)
         console.log(idRandom+123)
      }

