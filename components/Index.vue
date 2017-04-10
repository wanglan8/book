// HTML代码
<template>
<div><div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="static/images/lun1.jpg">
            </div>
            <div class="swiper-slide">
                <img src="static/images/lun2.jpg">
            </div>
            <div class="swiper-slide">
                <img src="static/images/lun3.jpg">
            </div>
            <div class="swiper-slide">
                <img src="static/images/lun4.jpg">
            </div>
            <div class="swiper-slide">
                <img src="static/images/lun5.jpg">
            </div>
            <div class="swiper-slide">
                <img src="static/images/lun6.jpg">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
    <!-- 文章 -->
    <div class="content1">
        <div class="zt">
            <a href="">&nbsp;&nbsp;热门专题</a><span><i class="iconfont icon-huanyihuan1"></i>换一批</span>
        </div>
        <div class="line">
            <a href="">诗</a><a href="">建筑圈</a><a href="">生活家</a><a href="">历史</a>
            <p></p>
            <a href="">旅行·在路上</a><a href="">摄影</a><a href="">短篇小说</a>
            <p></p>
            <a href="">谈写作</a><a href="">美食</a><a href="">心理</a><a href="">漫画·手绘</a>
        </div>
    </div>
    <div class="content">
        <div class="zt">
            <a href="">&nbsp;&nbsp;热门文章</a><span><i class="iconfont icon-dingzhi"></i>定制热门</span>
        </div>
        <ul style="display: block;">
            <li>
                <div class="r"><img src="static/images/zy1.jpg"></div>
                <div class="contents">
                    <div class="author">
                        <a href=""><img src="static/images/z1.jpg"></a>
                        <a href="">樊子夏</a>
                        <span class="time">昨天 18:57</span>
                    </div>
                    <div class="title1"><a href="">其实一个人活成李健，很简单</a></div>
                    <div class="dongtai">
                        <span class="ju">想法</span><a href="">阅读2181</a><span>·</span><a href="">评论33</a><span>·</span><a href="">喜欢164</a><span>·</span><a href="">赞赏1</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="r"><img src="static/images/zy2.jpg"></div>
                <div class="contents">
                    <div class="author">
                        <a href=""><img src="static/images/z2.jpg"></a>
                        <a href="">投资人日知录</a>
                        <span class="time">昨天 21:57</span>
                    </div>
                    <div class="title1"><a href="">创新工场 · 李开复：我与35位CEO硅谷游学的感悟</a></div>
                    <div class="dongtai">
                        <span class="ju">想法</span><a href="">阅读5114</a><span>·</span><a href="">评论49</a><span>·</span><a href="">喜欢240</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="r"><img src="static/images/zy3.jpg"></div>
                <div class="contents">
                    <div class="author">
                        <a href=""><img src="static/images/zy3.jpg"></a>
                        <a href="">芒果省 粉市</a>
                        <span class="time">10小时前</span>
                    </div>
                    <div class="title1"><a href="">打算写几个字儿了， 飞来飞去， 留下了一口新普和塑料普通话</a></div>
                    <div class="dongtai">
                        <span class="ju">旅行·在路上</span><a href="">阅读2190</a><span>·</span><a href="">评论50</a><span>·</span><a href="">喜欢75</a><span>·</span><a href="">赞赏1</a>
                    </div>
                </div>
            </li>
            <li>
                <div class="r"><img src="static/images/z4.jpg"></div>
                <div class="contents">
                    <div class="author">
                        <a href=""><img src="static/images/zy4.jpg"></a>
                        <a href="">成长中的王小青</a>
                        <span class="time">昨天 19:28</span>
                    </div>
                    <div class="title1"><a href="">林依晨告诉我们：自律才美丽</a></div>
                    <div class="dongtai">
                        <span class="ju">心理</span><a href="">阅读4665</a><span>·</span><a href="">评论39</a><span>·</span><a href="">喜欢266</a><span>·</span><a href="">赞赏1</a>
                    </div>
                </div>
            </li>
        </ul>
    </div></div>
</template>

// JS代码
<script>
require('../static/js/index.js');
</script>

// CSS代码-Sass代码
<style>
  body {
     margin: 0;
     padding: 0;
     color: #333;
 }
 
 img {
     width: 100%;
     height: 4.40367rem;
 }
 
 a {
     color: #333;
     text-decoration: none;
 }
 
 .content {
     height: 10.880734rem;
     padding: 0.366972rem;
 }
 
 .content1 {
     padding: 0.366972rem;
     height: 4.495413rem;
 }
 
 .content1 .zt {
     padding: 0.293578rem 0;
 }
 
 .content1 .zt a {
     border-left: 5px solid #e58c7c;
     color: #888;
 }
 
 .content1 .zt span {
     float: right;
     color: #888;
 }
 
 .content1 .line a {
     padding: 0.137615rem 0.275229rem;
     color: #e58c7c;
     border-radius: 5px;
     border: 2px solid #e58c7c;
     margin-right: 0.091743rem;
     text-decoration: none;
     font-size: 40px;
 }
 
 .content1 .line p {
     margin-bottom: 0.550459rem;
 }
 
 .content .zt {
     padding: 0.293578rem 0;
 }
 
 .content .zt a {
     color: #888;
     border-left: 5px solid #e58c7c;
 }
 
 .content .zt i {
     color: #888;
     font-size: 44px;
 }
 
 .content1 .zt i {
     font-size: 40px;
     color: #888;
 }
 
 .content .zt span {
     float: right;
     color: #888;
 }
 
 .content ul {
     height: 10.880734rem;
     border-top: #b4b4b4;
     display: none;
 }
 
 .content ul li {
     height: 3.743119rem;
     padding-bottom: 0.550459rem;
     margin-bottom: 0.550459rem;
     border-bottom: 1px solid #eee;
 }
 
 .contents .author {
     margin-bottom: 0.366972rem;
 }
 
 .contents .author a {
     font-size: 34px;
     text-decoration: none;
     color: #333;
 }
 
 .contents .author img {
     border-radius: 50%;
     width: 0.642202rem;
     height: 0.642202rem;
     vertical-align: middle;
 }
 
 .content .contents .title1 {
     height: 1.174312rem;
 }
 
 .content .contents .title1 a {
     font-size: 48px;
     font-weight: bold;
     text-decoration: none;
     color: #333;
 }
 
 .contents .dongtai {
     margin-top: 0.458716rem;
 }
 
 .contents .dongtai .ju {
     border: 1px solid #e58c7c;
     border-radius: 5px;
     color: #e58c7c;
     padding: 0.045872rem 0.183486rem;
     margin-right: 5px;
 }
 
 .contents .dongtai span {
     padding: 0px 4px;
 }
 
 .contents .dongtai a {
     text-decoration: none;
     color: #333;
 }
 
 .r {
     float: right;
 }
 
 .r img {
     width: 2.201835rem;
     height: 2.201835rem;
 }
 
 footer {
     width: 100%;
     height: 1.33945rem;
     background-color: #fcfcfc;
     position: fixed;
     bottom: 0;
     text-align: center;
 }
 
 footer nav {
     width: 100%;
     display: flex;
 }
 
 footer nav div {
     width: 20%;
     margin-top: 0;
 }
 
 footer nav .iconfont {
     font-size: 0.53211rem;
 }

</style>