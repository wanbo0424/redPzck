<template>
    <div class="fail" id="fail">
        <div class="title">
            <img class="left" src="../../static/ios/ft_iimg_bear2@2x.png">           
            <!-- <img class="right" src="ios/ft_iimg_ck1@2x.png" style="top: 4.5rem"> -->
            <textarea class="text" disabled="disabled">领取失败了！领取失了！领取失了！领取失了！领取失了！领取失了！领取失了！领取失了！领取失了！领取失</textarea>

        </div>
        <div class="main">
            <!-- <img class="left" src="ios/ft_iimg_hb1@2x.png"> -->
            <div class="top">
                <p class="top" id="errmsg"></p>
            </div>
        </div>
        <router-link to="/layOut">Go to layOut</router-link>
    </div>
</template>
<script>
export default {
    name:'redPacket'
}
</script>
<style>
#content .fail .main{
    width: 21.25rem;
    height: 23.125rem;
    position: relative;
    top: 3.75rem;
    background-image: url(../../static/ios/ft_iimg_hb1@2x.png);
    background-repeat:no-repeat; 
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    margin: 0 auto;
}


    .fail .title .text {
        font-weight: bold;
        
        font-size: 1.04rem;
        font-family:微软雅黑;
        color: rgba(119, 119, 119, 1);
        line-height: 1.075rem;
        margin: 0 auto;
        position: relative;
        top: 1.6rem;
        z-index: 20;
    }

    .fail .main {
        height: 22rem;
    }

        .fail .main .top .top {
            font-weight: bold;
            font-size: 1.04rem;
            font-family: 微软雅黑;
            color: rgba(119, 119, 119, 1);
            line-height: 1.41rem;
        }

        .fail .main > .top {
            margin: 0 auto;
            position: relative;
            top: 3rem;
            width: 11.22rem;
            text-align: center;
        }

        .fail .main .top .bottom {
            font-size: 0.875rem;
            font-family: PingFang-SC-Heavy;
            color: rgba(254, 112, 20, 1);
            line-height: 0.85rem;
        }

    .fail .foot .boder {
        text-align: center;
    }
        .fail .foot .boder span {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 1);
            line-height: 35px;
            margin: 0 4px 0 4px;
            vertical-align: middle;
        }

    .fail .foot .instruction {
        width: 14.1rem;
        height: 5.05rem;
        margin: 0 auto;
    }

        .fail .foot .instruction ul {
            width: 14.1rem;
            height: 5.05rem;
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 1);
            line-height: 1.1rem;
            margin-left: -1.5rem;
        }
</style>
