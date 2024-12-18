document.addEventListener("DOMContentLoaded", () => {
    const matContainer = document.getElementById("mat");
    const mats = Array.from(matContainer.children);

    // 랜덤하게 섞기
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    // 섞인 배열로 DOM 다시 배치
    const shuffledMats = shuffleArray(mats);
    shuffledMats.forEach((mat) => matContainer.appendChild(mat));
});

// 각 .mat1 요소에 대한 이미지 URL을 배열로 설정
const imageUrls = [
    "https://imgur.com/sbOvSRV.png",   // 강선우
    "https://imgur.com/ybj6we4.png",   // 공예주
    "https://i.imgur.com/XyoMhNK.png",   // 공현수
    "https://imgur.com/VddZGbA",   // 곽도아
    "https://i.imgur.com/AeUr44G.png",   // 김도연
    "https://i.imgur.com/YjEo3OB.png",   // 김상희
    "https://i.imgur.com/TcmrV4i.png",   // 김유정
    "https://i.imgur.com/plsITmD.png",   // 김정후
    "https://i.imgur.com/A0Cn8eK.png",   // 김준호
    "https://ifh.cc/g/pqwwd7.jpg",  // 김지선
    "https://i.imgur.com/unmnoUx.png",  // 김지영
    "https://i.imgur.com/JiVDUy5.png",  // 김해주
    "https://i.imgur.com/eJlEiFU.png",  // 김혜민
    "https://i.imgur.com/zImokov.png",  // 박재민
    "https://i.imgur.com/LskqSqg.jpg",  // 백지원
    "https://i.imgur.com/vnCzTcd.png",  // 손희연
    "https://i.imgur.com/EnUvTFk.jpg",  // 유이영
    "https://i.imgur.com/WkgJuzh.png",  // 이경현
    "https://i.imgur.com/rjc3LW9.png",  // 이시은
    "https://i.imgur.com/t0zuM8V.png",  // 조수아
    "https://i.imgur.com/Ra0czNf.png"   // 최우연
];


// 모든 .mat1 요소에 클릭 이벤트 추가
document.querySelectorAll('.mat1').forEach((mat, index) => {
    mat.addEventListener('click', function() {
        // .mat1 요소 안의 .front에 있는 <img> 요소를 찾기
        const img = this.querySelector('.front img');
        
        // 고유한 이미지 URL로 변경
        img.src = imageUrls[index]; // 클릭된 요소에 해당하는 이미지를 설정
    });
});


const sound = new Audio('sound/sound.mp3');

