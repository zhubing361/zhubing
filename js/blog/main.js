/**
 * Created by zhubing on 2020/11/7.
 */
$(function() {

    var blogObj = {
        id: 0,
        data: {},
        /**
         * 初始化
         */
        init() {
            let _this = this
            _this.id = _this.getQueryString('id') || undefined
            if(_this.id == undefined) {
                window.location.href = '/blog/404.html';
            }
            _this.getContent('/api/blog/detail', {id:_this.id}, function () {
                _this.initContent();
            })
        },
        /**
         * 根据变量名获取匹配值
         * @param name
         * @returns {string|undefined}
         */
        getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
            let r = window.location.search.substr(1).match(reg)
            if (r != null) return unescape(r[2])
            return undefined
        },
        /**
         * 请求接口
         * @param url
         * @param params
         * @param callback
         */
        getContent(url, params, callback) {
            let _this = this
            if(typeof params == 'function') {
                callback = params;
                params = undefined;
            }
            params = params || {}
            $.get(url, params, function (res) {
                if (res.status == 1) {
                    if (res.content.length > 0) {
                        _this.data = res.content
                        if (typeof callback != 'undefined') {
                            callback()
                        }
                    }
                } else {
                    console.log(res)
                }
            })
        },
        initContent() {
            let _this = this
            document.title = _this.data.title;
            $('#content').html(_this.data.content);
        }
    };

    blogObj.init();
});
