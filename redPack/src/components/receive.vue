<template>
    <div class="start" id="start"  >
        <!-- 信息框 -->
        <div class="title">
            <img class="left" src="../../static/ios/ft_iimg_bear@2x.png">            
            <img class="right" src="../../static/ios/ft_iimg_ck@2x.png">            
            <span class="text">哇!<span style="font-size: 1.03rem;padding-left:0.8rem;color: #3398FF;" id="phome"></span>慷慨送你</span>
        </div>
        <!-- 钱包 -->
        <div class="main">
            <div class="top">
                <p class="top">方特主题乐园商品红包</p>
                <p class="bottom">
                    <span style="vertical-align: super;font-size: 1.03rem;">￥</span>
                    <span style="font-size: 3.3rem;" id="amount"></span>
                </p>
            </div>
            <!-- 手机验证 -->
            <div class="right">
                <ul class="register-list">
                    <li>
                        <input type="text" class="top" placeholder="输入领取手机号" id="phoneNumer" v-model="phoneNo"/>
                    </li>
                    <li>
                        <input type="text" class="fl m-left" placeholder="输入验证码" id="smsCode" @keyup="nowGet" v-model="inputCode"/>
                        <em class="getSmsCode fl tc" @click="getSms" :class="{'getSmsCode-disabled':code}">{{getcode}}</em>
                    </li>
                    <a href="javascript:void(0)" class="register-btn  db" id="reg" :class="{'register-btn-disabled':get}" @click="nowRegister">立即领取</a>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {getRedpackinfo,sendSms,nowReceive} from '../api/api'
import failVue from './fail.vue';
import {isPhoneNo, geturl} from '../utils/common'

export default {
    name:'receive',
    data(){
        return {
            // 控制获取验证码按钮的样式
            code:false,
            // 控制立即领取按钮的样式
            get:true,
            getcode: '获取验证码',
            countdown:0,
            // 输入验证码的输入内容
            inputCode:'',
            phoneNo:'',
        }
    },
    created(){
        
    },
    methods:{
        // 验证码倒计时
        invokeSettime:function(second){
            var _this = this;
            _this.countdown = second;
            settime(second);
            function settime(second) {
                if (_this.countdown == 0) {
                    _this.code = false;  
                    _this.getcode = '重新获取';
                    _this.countdown = second;
                    return;
                } else {
                    _this.code = true
                    _this.getcode = `(${_this.countdown})秒` ;
                    _this.countdown--;
                }
                var myTimeout = setTimeout(function () {
                    settime(second);
                }, 1000);
            }
        },
        // 获取验证码事件
        getSms:function()   {
            var _this = this;
            var checkPhone = isPhoneNo(this.phoneNo)
            console.log(checkPhone)
            if(checkPhone){
                 sendSms({'phoneNumber':this.phoneNo}).then(res => {
                    console.log(res)
                    if(res.result == 0){
                        _this.invokeSettime(5);
                    }
                })
            }else{
                // this.bus.$emit('tips', {
                //     show: true,
                //     title: '输入正确手机号码',
                // })
                this.$tip({show:true,title: '输入正确手机号码',})
                
            }
            
        },
        nowGet:function(){
            this.inputCode == '' ? this.get = true : this.get = false
        },
        /**返回点击立即领取的信息
         * @return {Object}
         */
        nowRegister:function(){
            var componid = geturl('couponId');
            var ID = this.$route.params.id;
            nowReceive({"couponId":componid,
                        "Code": this.inputCode,
                        "phoneNumber": this.phoneNo}).then(res => {
                            console.log(res)
                        })
        }
    }
}
</script>
<style>
#content {
        width: 100%;;
        margin: 0 auto;
    }
    #content .start{
        margin: 0 auto;
    }
    .title{
        text-align: center;
        width: 100%
    }
    #content .title .left{
        height: 4.25rem;
        left: 1.28rem;
        top: 5rem;
        position: relative;
        z-index: 100;
    }
    #content .title .right{
        height: 3.75rem;
        left: -1.75rem;
        top: 5rem;
        position: relative;
        z-index: 10;
    }
    #content .start .main{
        /* width: 90%; */
        width: 21.25rem;
        height: 23.125rem;
        /* height: 42%; */
        position: relative; 
        top: 3.75rem;
        background-image: url(../../static/ios/ft_iimg_hb@2x.png);
        background-repeat:no-repeat; 
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        margin: 0 auto;
    }
    .start .title .text {

    font-weight: bold;
    position: relative;
    top: 2rem;
    z-index: 50;
    width: 13.81rem;
    height: 1rem;
    font-size: 1.03rem;
    font-family: 微软雅黑;
    color: #777777;
    line-height: 1.075rem;
    padding-left: 1.875rem;
}

.start .main {
    height: 22rem;
}

    .start .main .right {
        position: relative;
        top: 4.5rem;
        
    }

        .start .main .right .top {
            -webkit-appearance: none;
            border: none;
            padding-left: 2.5rem;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            padding: 0.5rem 0 0.5rem 1.5rem;
            width: 16.69rem;
            height: 2.81rem;
            
            font-size: 0.9rem;
            font-family: PingFang-SC-Bold;
            color: #333333;
            background: #FFFFFF;
            border-radius: 0.625rem;
            box-shadow: 3px 0px 20px rgba(249, 102, 58, 0.65)inset;
            -webkit-box-shadow: 3px 0px 20px rgba(249, 102, 58, 0.65)inset;
        }

        .start .main .right .m-left {
            -webkit-appearance: none;
            border: none;
            box-sizing: border-box;
            padding: 0.5rem 0 0.5rem 1.5rem;
            width: 9.19rem;
            height: 2.81rem;
            font-size: 0.9rem;
            font-family: PingFang-SC-Bold;
            color: #333333;
            background: rgba(255, 255, 255, 1);
            border-radius: 0.625rem;
            -webkit-box-shadow: 3px 0px 20px rgba(249, 102, 58, 0.65)inset;
            box-shadow: 3px 0px 20px rgba(249, 102, 58, 0.65)inset;
           
        }
        .start .main .right .m-right {
            width: 4.975rem;
            height: 2.125rem;
            background:  #FFE326;
            border-radius: 0.5rem;
            font-size: 0.7rem;
            font-family: PingFang-SC-Bold;
            color: rgba(238, 84, 40, 1);
            line-height: 0.875rem;
            border: none;
            -webkit-box-shadow: 3px 0px 27px rgba(255, 131, 31, 0.77)inset;
            box-shadow: 3px 0px 27px rgba(255, 131, 31, 0.77)inset;
            margin-left: 0.5rem;
        }

        .start .main .right .botton {
            width: 13.325rem;
            height: 2.25rem;
            background: rgba(198, 197, 197, 1);
            border-radius: 1.125rem;
            -webkit-box-shadow: 0.225rem 0px 0px 0.6rem 0px rgba(159, 65, 25, 0.36);
            box-shadow: 0.225rem 0px 0px 0.6rem 0px rgba(159, 65, 25, 0.36);
            font-size: 0.825rem;
            font-family: PingFang-SC-Bold;
            color: rgba(255, 255, 255, 1);
            line-height: 1.4rem;
            margin-top: 0.4rem;
            border: none;
            -webkit-box-shadow: 6px 0px 57px rgba(82, 82, 82, 0.2)inset;
            box-shadow: 6px 0px 57px rgba(82, 82, 82, 0.2)inset;
        }

        .start .main .right #gainTest {
            position: relative;
            top: -5.8rem;
            left: 8.7rem;
            font-size: 0.7rem;
            font-family: PingFang-SC-Bold;
            color: rgba(238, 84, 40, 1);
            line-height: 0.875rem;
        }

        .start .main .right #getNow {
            width: 13.325rem;
            height: 2.25rem;
            background: rgba(198, 197, 197, 1);
            border-radius: 1.125rem;
            box-shadow: 0.225rem 0px 0.6rem rgba(159, 65, 25, 0.36);
            -webkit-box-shadow: 0.225rem 0px 0.6rem rgba(159, 65, 25, 0.36);
        }

    .start .main .top .top {
        font-weight: 500;
        font-size: 1.03rem;
        font-family: 微软雅黑;
        color: rgba(254, 112, 20, 1);
        line-height: 1.125rem;
    }

    .start .main > .top {
        margin: 0 auto;
        position: relative;
        top: 1.625rem;
        width: 16.16rem;
        /* width: 75%; */
        text-align: center;
    }

    .start .main .top .bottom {
        font-size: 1.09rem;
        font-family: 微软雅黑;
        font-weight: bold;
        color: rgba(254, 112, 20, 1);
        line-height: 1.09rem;
        margin-top: 1.5rem;
        margin-right: 1.125rem;
    }
.register-list{
    list-style: none;
    padding: 0;
    margin: 1.5rem 0 0 2.2rem;
}
.register-list li{
    margin-bottom: 0.7rem;
    overflow: hidden;
}
.fl{
    float:left;
    display:inline;
    /* text-align:center;     */
}
.tc{
    text-align: center
}
.getSmsCode {
    -webkit-appearance: none;
    width: 6.22rem;
    height: 2.66rem;
    padding-top: 3px;
    background: rgba(255, 227, 38, 1);
    border-radius: 0.625rem;
    font-size: 0.875rem;
    font-family: PingFang-SC-Bold;
    color: rgba(238, 84, 40, 1);
    line-height: 2.66rem;
    border: none;
    box-shadow: 3px 0px 27px rgba(255, 131, 31, 0.77)inset;
    -webkit-box-shadow: 3px 0px 27px rgba(255, 131, 31, 0.77)inset;
    margin-left: 1.2rem;
}
em{
    font-style: normal;
}
.getSmsCode-disabled { 
    -webkit-appearance: none;
    background: #C6C5C5;
    color: rgba(255, 255, 255, 1);
    box-shadow: 6px 0px 57px rgba(82, 82, 82, 0.2)inset;
    
}
.db{
    text-align: center;
    display: block;
    text-decoration: none;
}
.register-btn {   
    width: 16.66rem;
    height: 2.81rem;
    border-radius: 1.41rem;
    font-size: 1.03rem;
    font-family: PingFang-SC-Bold;
    line-height: 2.81rem;
    margin-top: 1rem;
    border: none;    
    box-shadow: 3px 0px 27px rgba(255, 131, 31, 0.77)inset;  
    background: rgba(255, 227, 38, 1);
    color: rgba(238, 84, 40, 1);
}
.register-btn-disabled {
    -webkit-appearance: none;
    background: rgba(198, 197, 197, 1);
    color: rgba(255, 255, 255, 1);
    box-shadow: 6px 0px 57px rgba(82, 82, 82, 0.2)inset;
    -webkit-box-shadow: 6px 0px 57px rgba(82, 82, 82, 0.2)inset;
    
}

</style>
