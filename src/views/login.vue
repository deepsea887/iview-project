<style scoped lang="less">
    .loginbg{
        height: 100vh;
        position: relative;
        background-image: url(../images/login-bg.jpg);
        background-repeat: no-repeat;
        background-position: 0 0%;
        -webkit-animation-name: backgroundWalkY;
        animation-name: backgroundWalkY;
        -webkit-animation-duration: 20s;
        animation-duration: 20s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background-size: 100%;
    }
    @-webkit-keyframes backgroundWalkY {
    0% {
        background-position: 0 0%; }
    100% {
        background-position: 0 100%; } }

    @keyframes backgroundWalkY {
    0% {
        background-position: 0 0%; }
    100% {
        background-position: 0 100%; } }

    @-webkit-keyframes backgroundWalkX {
    0% {
        background-position: 0 0%; }
    100% {
        background-position: 100% 0; } }

    @keyframes backgroundWalkX {
    0% {
        background-position: 0 0%; }
    100% {
        background-position: 100% 0; } }
    .sayhello{position: absolute;left: 20px;bottom: 100px;color: #ffffff;font-size: 50px;line-height: 150%;}
    .photoby{position: absolute;left: 20px;bottom: 50px;color: #ffffff;font-size: 12px;line-height: 150%;}
    .logo{width: 80px;height: 80px;background: #ffffff;padding: 20px;box-shadow: 0 2px 6px #e6ecf1;margin: 50px 0 40px 0;border-radius: 200px;}
    .logo img{width: 100%;text-align: center;}
    .welcome{margin: 0 0 40px 0;}
    .welcome .wel1{font-size: 30px;line-height: 150%;}
    .welcome .wel2{font-size: 12px;color: #666666;line-height: 150%;}
</style>
<template>
    <Row type="flex" justify="start" class="code-row-bg">
        <Col :xs="{ class: 'hide' }" :md="{span: 16, class: 'show' }">
            <div class="loginbg">
                <div class="sayhello">Good Morning</div>
                <div class="photoby">Photo by <a class="text-light" target="_blank" href="https://www.canva.cn/p/pexels/">Ken Tomita</a> Kauffman canva.cn</div>
            </div>
        </Col>
        <Col :xs="{ span: 24 }" :md="{ span: 8 }">
            <Row type="flex" justify="start" class="code-row-bg">
                <Col :xs="{ span: 20,offset: 2 }" :md="{ span: 16,offset: 4 }">
                    <div class="logo"><img src="../images/logo.svg"></div>
                    <div class="welcome">
                        <div class="wel1">欢迎使用 <b>轻松考试</b></div>
                        <div class="wel2">欢迎光临轻松考试</div>
                    </div>
                    <Form ref="loginCtrl" :model="loginCtrl" :rules="ruleValidate" label-position="top">
                        <FormItem label="用户名" prop="username">
                            <Input prefix="ios-contact" size="large" v-model="loginCtrl.username"></Input>
                        </FormItem>
                        <FormItem label="密码" prop="password">
                            <Input prefix="ios-lock" size="large" v-model="loginCtrl.password" type="password"></Input>
                        </FormItem>
                        <FormItem>
                            <Button size="large" long type="primary" @click="login('loginCtrl')">登录</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                loginCtrl: {
                    username: '',
                    password: ''
                },
                ruleValidate: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            login (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$axios({
                            method: "post",
                            url: "/login", // 接口地址
                            data: {
                                username: this.loginCtrl.username,   // 传接口参数
                                password: this.loginCtrl.password
                            }
                        })
                        .then(response => {
                            //this.$Message.success('成功登录，正在进入！');   // 成功的返回
                            //this.$router.push('/index')
                            this.$Message.success(response.message);
                        })
                        .catch(error => this.$Message.success('网络错误，请稍后再试！')); // 失败的返回
                    } else {
                        this.$Message.error('请输入用户名和密码！');
                    }
                })
            }
        }
    }
</script>