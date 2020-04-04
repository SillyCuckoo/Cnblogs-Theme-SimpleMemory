//cnblogConfig.js
    window.cnblogsConfig = {
        GhVersions : 'v1.2.9',    //设置样式文件加载源，主题版本
        GhUserName: 'SillyCuckoo',    //设置样式文件加载源，GitHub用户名
        GhRepositories: 'Cnblogs-Theme-SimpleMemory',    //设置样式文件加载源，主题仓库名称
        blogUser : "山里樵夫",     // 用户名
        blogAvatar : "https://pic.cnblogs.com/avatar/1805250/20200403070021.png",     // 用户头像
        blogStartDate  : "2019-9-16",         // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
        webpageTitleFocus :  '(*´∇｀*) 欢迎回来！',    //获取焦点标签文字
        webpageTitleOnblur :  '(oﾟvﾟ)ノ我等你回来哟!',    //失去焦点标签文字
        webpageIcon: "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_001.webp",    //网站图标
        homeTopAnimationRendered: true,    //是否渲染主页banner动效
        homeTopAnimation: {      //主页banner动效配置
            radius: 15,
            density: 0.2,
            color: 'random', // 颜色设置，“random” 为随机颜色
            clearOffset: 0.3,
        },
        //homeBannerText: "好好学习，天天向上！",    //主页banner上的标语，设置此选项会固定显示文字，默认为空，自动获取一句。
        homeTopImg    : [    //配置首页大图
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_002.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_003.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_004.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_005.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_014.jpg"
        ],
        essayTopAnimationRendered: true,    //是否渲染文章页banner动效
            essayTopAnimation: {
                triW : 14,
                triH : 20,
                neighbours : ["side", "top", "bottom"],
                speedTrailAppear : .1,
                speedTrailDisappear : .1,
                speedTriOpen : 1,
                trailMaxLength : 30,
                trailIntervalCreation : 100,
                delayBeforeDisappear : 2,
                colorsRandom: true, // v1.2.4 是否开启随机颜色
                colors: [
                    '#96EDA6', '#5BC6A9',
                    '#38668C', '#374D84',
                    '#BED5CB', '#62ADC6',
                    '#8EE5DE', '#304E7B'
                ]
        },
        essayTopImg : [
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_006.webp",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_007.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_008.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_009.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_010.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_011.jpg",
            "https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_012.jpg"
        ],
        switchDayNight: {      
            enable: true,           // 是否开启日/夜间模式切换按钮
            auto: {                     // 自动切换相关配置
                enable: true,       // 开启自动切换
                dayHour: 5,        // 日间模式开始时间，整数型，24小时制
                nightHour: 19    // 夜间模式开始时间，整数型，24小时制
             }
        },

        //fontIconExtend: "//at.alicdn.com/t/font_xxxxxxxxxx.css",   //字体图标库
        //menuUserInfoBgImg: '',  //菜单个人信息背景图片设置
        menuNavList: [         // 列表导航
            ['GitHub', 'https://github.com/SillyCuckoo'],
            ['Cnblogs', 'https://www.cnblogs.com/'],
        ],
        progressBar: {            //进度条配置，显示在页面顶部
               id      : 'top-progress-bar', // 请勿修改该值
               color   : '#77b6ff',
               height  : '2px',
               duration: 0.5,
        },
        reward: {             //打赏功能
            enable: true,   // 是否开启打赏功能
            wechatpay: 'https://cdn.jsdelivr.net/gh/SillyCuckoo/CDN@master/cnblog/images/image_013.png'    // 微信支付二维码图片URL
            //alipay: ''           // 支付宝支付二维码图片URL
        },
        codeMaxHeight: true,    //限制代码框的最大高度；如开启，代码框高度不会超过页面可视区域的70%，隐藏部分通过滚动的方式查看。
        essayCodeHighlightingType: "highlightjs",    //代码高亮类型设置
        essayCodeHighlighting: "atom-one-dark",      //代码高亮主题

        footerStyle: 2,    //页脚样式

        bottomBlogroll: [     // 友情链接
            ["BNDong", 'https://www.cnblogs.com/bndong/'],
            ["申请坑位", 'https://msg.cnblogs.com/send/sillycuckoo'],
            ["申请坑位", 'https://msg.cnblogs.com/send/sillycuckoo'],
            ["申请坑位", 'https://msg.cnblogs.com/send/sillycuckoo'],
        ],
        bottomText: {    //页脚标语
            left : "",
            right: "Talk is cheap, show me the code !",
        },
        consoleList: [    //控制台输出
             ['山里樵夫 CNBlogs', 'https://www.cnblogs.com/sillycuckoo/'],
             ['山里樵夫  GitHub', 'https://github.com/SillyCuckoo'],
             ['山里樵夫 Email', 'victor2015yhm@gmail.com'],
         ],
    }  //End of Config