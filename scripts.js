let cursor= document.querySelector('#cursor');
   document.addEventListener('mousemove', (e)=>{
   console.log('hello')
   cursor.style.left= `${e.pageX}px`;
   cursor.style.top= `${e.pageY}px`;
 })


let group1= document.querySelectorAll('.group1');
group1.forEach(element => {
   element.addEventListener('mouseover', ()=>{
    console.log('group1')
    document.querySelector('#mat').style.backgroundImage='url(pink.png)';
    element.style.border='solid 12px #F69898';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor1.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 

   element.addEventListener('mouseout', ()=>{
    console.log('group1')
    document.querySelector('#mat').style.backgroundImage='url(logo.png)';
    element.style.border='none';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor0.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   })
});

let group2= document.querySelectorAll('.group2');
group2.forEach(element => {
   element.addEventListener('mouseover', ()=>{
    console.log('group2')
    document.querySelector('#mat').style.backgroundImage='url(yellow.png)';
    element.style.border='solid 12px #FAE01B';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor2.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
   element.addEventListener('mouseout', ()=>{
    console.log('group2')
    document.querySelector('#mat').style.backgroundImage='url(logo.png)';
    element.style.border='none';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor0.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
});

let group3= document.querySelectorAll('.group3');
group3.forEach(element => {
   element.addEventListener('mouseover', ()=>{
    console.log('group3')
    document.querySelector('#mat').style.backgroundImage='url(green.png)';
    element.style.border='solid 12px #73F05A';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor3.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
   element.addEventListener('mouseout', ()=>{
    console.log('group3')
    document.querySelector('#mat').style.backgroundImage='url(logo.png)';
    element.style.border='none';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor0.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
});

let group4= document.querySelectorAll('.group4');
group4.forEach(element => {
   element.addEventListener('mouseover', ()=>{
    console.log('group4')
    document.querySelector('#mat').style.backgroundImage='url(skyblue.png)';
    element.style.border='solid 12px #70D6FF';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor4.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
   element.addEventListener('mouseout', ()=>{
    console.log('group4')
    document.querySelector('#mat').style.backgroundImage='url(logo.png)';
    element.style.border='none';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor0.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
});

let group5= document.querySelectorAll('.group5');
group5.forEach(element => {
   element.addEventListener('mouseover', ()=>{
    console.log('group5')
    document.querySelector('#mat').style.backgroundImage='url(purple.png)';
    element.style.border='solid 12px #997EDD';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor5.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
   element.addEventListener('mouseout', ()=>{
    console.log('group5')
    document.querySelector('#mat').style.backgroundImage='url(logo.png)';
    element.style.border='none';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor0.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
});

let group6= document.querySelectorAll('.group6');
group6.forEach(element => {
   element.addEventListener('mouseover', ()=>{
    console.log('group6')
    document.querySelector('#mat').style.backgroundImage='url(orange.png)';
    element.style.border='solid 12px #F1C159';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor6.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
   element.addEventListener('mouseout', ()=>{
    console.log('group6')
    document.querySelector('#mat').style.backgroundImage='url(logo.png)';
    element.style.border='none';

    document.addEventListener('mousemove', (e)=>{
      console.log('hello')
      cursor.style.backgroundImage= "url('cursor0.png')";
      cursor.style.left= `${e.pageX}px`;
      cursor.style.top= `${e.pageY}px`;
    })
   }) 
});

document.querySelector('.blockBox').addEventListener('click',()=>{
   document.querySelector('.blockBox').style.display= 'none';
}
)