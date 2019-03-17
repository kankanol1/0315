/*-------------------联系我们--------------*/

let objN = document.getElementById("name");
let nReg = document.querySelector('.nreg');
let objE = document.getElementById("email");
let cReg = document.querySelector('.creg');

let objC = document.getElementById('company');
let objP = document.getElementById("phone");

let infoItem = 0;
let index = false;
let oLog = document.getElementById('button');

$(objN).blur(function () {
    $(nReg).text("");
    if (objN.value === "") {
        $(nReg).text("姓名不可空!");
        return false;
    } else {
        infoItem++;
        $(nReg).text("");
        return false;
    }
});
$(objC).blur(function () {
    $(cReg).text("");
    if (objC.value === "") {
        $(cReg).text("公司名称不可为空!");
        return false;
    } else {
        infoItem++;
        $(cReg).text("");
        return false;
    }
});
$(objE).blur(function () {

    $(".ereg").text("");
    let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
    if (objE.value === "") {
        $(".ereg").text("邮箱不可为空!");
        return false;
    } else if (!reg.test(objE.value)) {
        $(".ereg").text("邮箱格式不正确!");
        return false;
    } else {
        infoItem++;
        $(".ereg").text("");
        return false;
    }
});
$(objP).blur(function () {
    let reg1 = /^0\d{2,3}-\d{7,8}$/;
    let reg2 = /^1\d{10}$/;
    if (objP.value === "") {
        $(".preg").text("电话不可为空!");
        return false;
    } else if (!(reg1.test(objP.value) || reg2.test(objP.value))) {
        $(".preg").text("电话格式不正确!");
        return false;
    }
    else {
        infoItem++;
        $(".preg").text("");
        return false;
    }
});



oLog.addEventListener('click', function () {
    if (infoItem == 4) {
        $.ajax({
            'url': '../js/index.php',
            'type': 'GET',
            'async': true,
            'dataType': 'json',
            'data': {
                "name": $('#name').val(),
                "company": $('#company').val(),
                "email": $('#email').val(),
                "phone": $('#phone').val(),
                "text": $('#text').val()
            },
            'success': function (data) {
                $('#name').val('');
                $('#company').val('');
                $('#email').val('');
                $('#phone').val('');
                $('#text').val('');
                alert('感谢您的合作，我们会尽快联系您。');
                window.open('../', '_self', true);
            },
            'error': function (data) {
                alert('数据库连接失败');
            },
        });

    } else {
        alert('信息不完整');
    }
});









