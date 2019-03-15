/*js*/


/******************头部事件********************/
/*let oHeaderA = document.querySelectorAll('#header .navBarA .itemU li');
let oHeaderFlag = 0;
for(let i=0;i<oHeaderA.length;i++){
    oHeaderA[i].index = i;
    oHeaderA[i].addEventListener('click',function(){
        oHeaderA[oHeaderFlag].className = '';
        this.className = 'active';
        oHeaderFlag = this.index;
    })
}*/

let connectBox = document.querySelector('#connectBox');


/*---------------------------------行业---------------------------------------*/
let oLi = document.querySelectorAll('#apply .apply .box .title ul>li');
let oContent = document.querySelectorAll('#apply .apply .box .content .ap');

if (oLi) {
    // console.log(oContent);
    let flagA = 0;
    for (let i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].addEventListener('click', function () {
            oLi[flagA].className = '';
            oContent[flagA].style.display = 'none';
            this.className = 'active';
            oContent[this.index].style.display = 'block';
            flagA = this.index;

        });

    }
}
/*---------------------------------/行业---------------------------------------*/

/*----------------------------------首页滚动事件----------------------------------*/
window.onscroll = function () {

    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (document.querySelectorAll('#product .row .item').length) {
        let oDemoLi = document.querySelectorAll('#product .row .item');
        // console.log(oDemoLi);
        oDemoLi[0].style.left = 0;
        oDemoLi[0].style.opacity = 1;
        oDemoLi[0].style.transition = '1.5s';
        for (let i = 1; i < oDemoLi.length; i++) {
            if (scrollTop + document.documentElement.clientHeight - 120 > oDemoLi[i].offsetTop) {
                oDemoLi[i].style.left = 0;
                oDemoLi[i].style.opacity = 1;
                oDemoLi[i].style.transition = '2s';

            }
        }
        // console.log(100);

        if (scrollTop > 100) {
            $(connectBox).fadeIn(1000);
            //console.log(100);
        }

    }

    if (scrollTop > 100) {
        $(connectBox).fadeIn(1000);
        // console.log(100);

    }


};


// console.log(oDemoLi);


/*----------------------------------/首页滚动事件----------------------------------*/