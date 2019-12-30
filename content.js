document.addEventListener("keydown",ev => {
    if(ev.altKey && parseInt(ev.key)){//ctrl+Num按键组合
        //发送跳转索引给后台脚本
        let index=parseInt(ev.key)-1;
        browser.runtime.sendMessage({index});
    }
})
