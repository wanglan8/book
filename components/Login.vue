// HTML代码
<template>
<div> <div class="container">
        <div class="row one">
            <button type="button" class="close"><span>&times;</span></button>
        </div>
        <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                <div class="ys">
                    <h1>简书</h1>
                </div>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
        </div>
    </div>
    <!-- 登录 -->
    <div id="login">
        <form>
            <div class="dl">
                <label><i class="iconfont icon-denglu"></i></label>
                <input type="text" name="" placeholder="手机或邮箱"><span><i class="iconfont icon-chahao"></i></span>
            </div>
            <div class="dl line">
                <label><i class="iconfont icon-mima"></i></label>
                <input type="password" name="" placeholder="密码"><span><i class="iconfont icon-yanjing"></i></span>
            </div>
            <div class="login_btn">
                <button>登录</button>
            </div>
        </form>
        <div class="wj">
            <p>忘记密码？</p>
        </div>
        <div class="sj">
            <p>————社交账号直接登录————</p>
        </div>
    </div>
    <!-- 小logo-->
    <div class="lo">
        <div class="wx">
            <img src="static/images/wx.jpg">
        </div>
        <div class="qq">
            <img src="static/images/qq.jpg">
        </div>
        <div class="wb">
            <img src="static/images/wb.jpg">
        </div>
        <div class="qt">
            <img src="static/images/qt.jpg">
        </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
        <ul>
            <li>
                <div class="container summary">
                    <div class="row text-center">
                        <div class="item">
                            <a href="" style="color:#e58c7c">新用户注册</a>
                            <span>|</span>
                        </div>
                        <div class="item">
                            <a href="">随便看看</a><span>|</span>
                        </div>
                        <div class="item">
                            <a href="#" data-toggle="modal" data-target="#myModal">登录遇到问题?</a>
                            <!-- Modal -->
                            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                            <!-- <h4 class="modal-title" id="myModalLabel">无法用海外手机号登录</h4> -->
                                        </div>
                                        <div class="modal-body small">
                                            <ul>
                                                <li>无法用海外手机号登录</li>
                                                <li>无法用google账号登录</li>
                                                <li>忘记密码？</li>
                                            </ul>
                                        </div>
                                        <div class="modal-footer">
                                            <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div></div>
</template>

// JS代码
<script  type="text/ecmascript-6">

</script>

// CSS代码-Sass代码
<style lang="sass" rel="stylesheet/sass">
 a {
     color: #909090;
 }
 
 .one {
     height: 1.981651rem;
 }
 
 .close {
     margin-right: 0.366972rem;
     margin-top: 0.366972rem;
 }
 
 .one span {
     font-size: 70px;
     color: #666;
 }
 
 .ys {
     background: #fff;
 }
 
 .ys h1 {
     color: #e78170;
     font-size: 1.100917rem;
     font-family: '黑体';
 }
 
 #login {
     height: 8.807339rem;
     padding: 0.550459rem;
 }
 
 .dl {
     border: 2px solid #cfcfcf;
     border-radius: 5px;
 }
 
 .dl input {
     border: none;
     width: 50%;
     font-size: 48px;
     height: 1.321101rem;
 }
 
 .dl label {
     width: 18%;
 }
 
 #login .dl label {
     font-size: 48px;
     text-align: center;
 }
 
 #login .dl label i {
     font-size: 48px;
 }
 
 #login .dl span {
     display: none;
 }
 
 #login .dl span i {
     font-size: 48px;
 }
 
 #login .login_btn {
     margin-top: 0.550459rem;
 }
 
 #login .login_btn button {
     width: 100%;
     height: 1.321101rem;
     background: #97c8e3;
     border: none;
     font-size: 56px;
     color: #fff;
     border-radius: 5px;
 }
 
 .line {
     border-top-width: 0px;
 }
 
 .wj {
     height: 1.834862rem;
 }
 
 .wj p {
     line-height: 1.834862rem;
     font-size: 48px;
     text-align: center;
     color: #919191;
 }
 
 .sj p {
     line-height: 1.651376rem;
     font-size: 48px;
     text-align: center;
     color: #919191;
 }
 
 .lo {
     display: flex;
     width: 6.788991rem;
     margin: 0 auto;
 }
 
 .lo .wx,
 .wb,
 .qq,
 .qt {
     width: 25%;

     text-align: center;
 }
 
 .lo img {
     border-radius: 50%;
      height: 1.100917rem;
      width:1.100917rem;
 }
 
 .footer {
     height: 2.93578rem;
 }
 
 .footer ul li {
     line-height: 2.93578rem;
    
 }
 
 .footer ul li a {
     text-decoration: none;
     color: #acacac;
      font-size: 0.458716rem;
 }
 
 .small ul li {
     font-size: 48px;
     height: 1.504587rem;
     line-height: 1.504587rem;
     border-bottom: 1px solid #ddd;
 }
 
 .item {
     float: left;
 }
 
 .item span {
     padding: 0 0.183486rem;
     color: #ddd;
 }
 
 .row {
     margin: 0 auto;
 }

</style>