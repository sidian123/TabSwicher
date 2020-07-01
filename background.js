/**
 * 标签页跳转
 * @param {Number} index 标签页索引,超出范围时算作临界值
 */
async function go(index) {
    console.log(`before modify ${index}`);
    
    // 获取当前窗体的所有tab页
    let tabs=(await browser.tabs.query({windowId:browser.windows.WINDOW_ID_CURRENT}));
    // 参数预处理
    index=index<0?0:index;
    index=index>=tabs.length?tabs.length-1:index;
    console.log(`after modify ${index}`);
    // 跳转
    browser.tabs.update(tabs[index].id,{active:true})
}


browser.runtime.onMessage.addListener(msg=>{
    go(msg.index);
})