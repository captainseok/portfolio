'use strict'

//Make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }
})

//Handle scrolling when tapping on the navbar menu
//querySelector->제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫번째 element를 반환
//addEventListener->지정한 유형의 이벤트를 수신할 떄 마다 호출할 함수를 설정이 가능!
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
})

//contact me를 눌렀을때 맨 아래로 자동scroll되도록 코딩

//Handle click on "contact me button on home"
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click',()=>{
    scrollIntoView('#contact');
})

//scrolling시, home화면이 transparent되게 코딩
//메서드는 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환합니다.
//Make home slowly fade to transaprent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
home.style.opacity = 1 - window.scrollY / homeHeight; //사이트의 Y축 좌표값에 대한 homeHeigh의 비율을 조정해 점점 내려갈수록 opcity값이 0되어 투명도가 활성화된다.
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}


//scrolling시 button이 화면에 출력되로혹 하면 된다
//scroll시 이벤트를 출력!
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
 if(window.scrollY> homeHeight/2){
    arrowUp.classList.add('visible');
 }
 else{
    arrowUp.classList.remove('visible');
 }
});


arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});

//버튼을 누를때 누른 아이템만 나오는거

const categoryBtn = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
categoryBtn.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }
    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
    console.log(filter);
    projects.forEach((project) =>{
        console.log(project.dataset.type);
        if(filter ==='*' || filter ===project.dataset.type){
            project.classList.remove('invisible');
        }
        else{
            project.classList.add('invisible');
        }
    });

        projectContainer.classList.remove('anim-out');
    },300);
})
