(function  ($,window) {
    //这些参数 随意啊
    // var pulginNaame = "an";//这个名字是插件的名字   这样 比较清晰的知道这个插件的名字而不用 来到代码中间看名字6666
        // defaulat= {//这是默认参数  你可以在用的时候  生命一个新对象 覆盖他 几乎所有的jq插件 这个板式  用的
        //     path1:"input"
        // };
    //先别删除

//靠 怎么写
    //如果不写默认 你没办法 修改里面的东西 对吗 小伙子对
    // 上一段清楚了哈
    $.fn.an= function (cfg) {//  插件函数声明
        return this.each(function () {//这句是关键,这是为了支持链式调用  没别的啥 恩这里的this是jq是$
            // var opts = $.extend(defaulat,cfg);//这句的意思是  cfg替换默认  参数defa..  结束了
            // console.log(opts);//这里是  拿到参数后  操作 这样行吗 这样你怎么王丽传参数呢 你的参数呢

            console.log($(this).find(cfg));//理解吗不理解  我要找 用这个插件的元素里面的input元素哦

            // console.log(opts.path1);//这里是  拿到参数后  操作 这样行吗 这样你怎么王丽传参数呢 你的参数呢
            //你仔细想想 不是必须传参数的 因为 默认你得给出一个参数 格式 了解吗不谢默认也行  那你的插件会报错 你看啊s
        })
    }
})(jQuery,window)





