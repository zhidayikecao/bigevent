$(function() {

    // 点击去注册账号的链接
    $('#link_reg').on('click', function() {
        $('.loggin-box').hide();
        $('.reg-box').show();
    })
    $('#link_login').on('click', function() {
        $('.reg-box').hide();
        $('.loggin-box').show();
    })
    var form = layui.form;
    form.verify({
            pwd: [/^[\S]{6,12}$/,
                '密码必须6到12位，且不能出现空格'
            ]
        })
        //     // 注册功能
        // $('#form_reg').on('submit', function(e) {
        //     e.preventDefault();
        //     $.post('http://ajax.frontend.itheima.net//api/reguser',

    //             { username: $('#form_reg [name=username]').val(), password: $('#form_reg [name=password]').val() },
    //             function(res) {
    //                 if (res.status !== 0) {
    //                     // alert("注册失败");
    //                     return console.log(res.message)
    //                 } else {
    //                     alert('恭喜,注册成功');
    //                 }
    //             })
    //         // console.log('11');
    // })
    // 监听注册表单的提交事件
    $('#form_reg').on('submit', function(e) {
            // 1. 阻止默认的提交行为
            e.preventDefault()
                // console.log('11');
                // 2. 发起Ajax的POST请求
            var data = {
                username: $('#form_reg [name=username]').val(),
                password: $('#form_reg [name=password]').val()
            }
            console.log(data);
            $.post('http://ajax.frontend.itheima.net/api/reguser', data, function(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message)
                }
                layer.msg('注册成功，请登录！')
                    // 模拟人的点击行为
                $('#link_login').click()
            })
        })
        // 登录
    $('#form_login').on('submit', function(e) {
        e.preventDefault();
        var data = {
            username: $('#form_login [name=username]').val(),
            password: $('#form_login [name=password]').val()
        }
        $.post('http://ajax.frontend.itheima.net/api/login', data, function(res) {
            if (res.status != 0) {
                return layer.msg(res.message);
            } else {
                layer.msg('登录成功')
                $('#link_login').click()
            }
        });
    })
})