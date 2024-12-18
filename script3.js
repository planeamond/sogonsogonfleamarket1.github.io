let hover= document.querySelector('.mat1:nth-child(1)');
    let hovers= document.querySelectorAll('.mat1');
    hovers.forEach((a,i) => {
        // console.log(i);
        a.addEventListener('mouseover', ()=>{ 
            let wow= i+1;
            document.querySelector('.text:nth-child('+wow+')').style.display='block';
    });
        a.addEventListener('mouseout', ()=>{ 
        let wow= i+1;
        document.querySelector('.text:nth-child('+wow+')').style.display='none';
});
});