$(function () {

    let myResume = {
        testView: null,
        /**
         * 内容
         */
        markdown_text: 'Hello',
        /**
         * 初始化
         */
        init() {
            let _this = this
            let y = _this.getQueryString('y') || undefined
            _this.getContent(y, function () {
                _this.showEditor()
            })
        },
        /**
         * 初始化markdown预览 滚动监听测试未通过 todo
         */
        showEditor() {
            let _this = this
            _this.testView = editormd.markdownToHTML("markdown-view", {
                markdown: markdown_text, // Also, you can dynamic set Markdown text
                htmlDecode: true,  // Enable / disable HTML tag encode.
                // htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
                tocm: true,
                tocContainer: "",
                tocDropdown: false,
                tocTitle: "目录"
            })
        },
        /**
         * 获取md文件内容内容
         * @param y string 年份 2019 2020
         * @param callback 回调函数
         * callback 回调
         */
        getContent(y, callback) {
            y = y || 2020
            $.get('./api/get_file.php', {y: y}, function (res) {
                if (res.status == 1) {
                    if (res.content.length > 0) {
                        markdown_text = res.content
                        if (typeof callback != 'undefined') {
                            callback()
                        }
                    }
                } else {
                    console.log(res)
                }
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
        }
    }

    $(function () {
        myResume.init()
    })
})
