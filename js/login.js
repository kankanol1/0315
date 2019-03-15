
/*-------------------联系我们--------------*/

let objN = document.getElementById("name"); //要验证的对象
let nReg =document.querySelector('.nreg');
let objE = document.getElementById("email"); //要验证的对象
let cReg =document.querySelector('.creg');

let objC = document.getElementById('company'); //要验证的对象
let objP = document.getElementById("phone"); //要验证的对象

let infoItem = 0;
$(objN).blur(function(){
    $(nReg).text("");
    if(objN.value === ""){ //输入不能为空
        $(nReg).text("姓名不可空!");
        return false;
    }else{
        infoItem ++;
        $(nReg).text("");
        return false;
    }
});
$(objC).blur(function(){
    $(cReg).text("");
    if(objC.value === ""){ //输入不能为空
        $(cReg).text("公司名称不可为空!");
        return false;
    }else{
        infoItem ++;
        $(cReg).text("");
        return false;
    }
});
$(objE).blur(function(){

    $(".ereg").text("");
    let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    if(objE.value === ""){ //输入不能为空
        $(".ereg").text("邮箱不可为空!");
        return false;
    }else if(!reg.test(objE.value)){ //正则验证不通过，格式不对
        $(".ereg").text("邮箱格式不正确!");
        return false;
    }else{
        infoItem ++;
        $(".ereg").text("");
        return false;
    }
});
$(objP).blur(function(){

    // $(".preg").text("");
    //座机号码
    let reg1 = /^0\d{2,3}-\d{7,8}$/;

    //手机号码
    let reg2 = /^1\d{10}$/;
    if(objP.value === ""){ //输入不能为空
        $(".preg").text("电话不可为空!");
        return false;
    }else if(!(reg1.test(objP.value) || reg2.test(objP.value))){
        $(".preg").text("电话格式不正确!");
        return false;
    }
    else{
        infoItem ++;
        $(".preg").text("");
        return false;
    }
});


let index = false;
$('#norm').codeVerify({
    type :1,
    width : '250px',
    height : '35px',
    fontSize : '25px',
    codeLength : 4,
    btnId : 'button',
    ready : function() {
        let oItem = document.querySelectorAll('.sty');

    },
    success : function() {
        if(infoItem == 4){
            $.ajax({
                'url':'../js/index.php',
                'type':'GET',
                'async':true,
                'dataType':'json',
                'data':{
                    "name":$('#name').val(),
                    "company":$('#company').val(),
                    "email":$('#email').val(),
                    "phone":$('#phone').val(),
                    "text":$('#text').val()
                },
                'success':function(data){
                    $('#name').val('');
                    $('#company').val('');
                    $('#email').val('');
                    $('#phone').val('');
                    $('#text').val('');
                    $('.varify-input-code').val('');
                    alert('感谢您的合作，我们会进款联系您。');
                    window.open('../','_self',true);
                },
                'error':function(data){
                    $('.varify-input-code').val('');
                    alert('数据库连接失败');
                },
            });

        }else{

            alert('信息不完整');
            $('.varify-input-code').val('');

        }

    },
    error : function() {
        $('.varify-input-code').val('');
        alert('验证码不匹配！');
    }
});






