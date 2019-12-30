/**
 * 标签页跳转
 * @param {Number} index 标签页索引,超出范围时算作临界值
 */
function go(index) {
    browser.tabs.query({})
        .then(tabs => {
            //参数预处理
            index=index<0?0:index;
            index=index>=tabs.length?tabs.length-1:index;
            //跳转
            for(let i=0;i<tabs.length;i++){
                if(index===i){
                    browser.windows.update(tabs[i].windowId, {focused: true});//focus window
                    browser.tabs.update(tabs[i].id, {active: true});//focus tab
                    break;
                }
            }

        });
}


browser.runtime.onMessage.addListener(msg=>{
    go(msg.index);
})