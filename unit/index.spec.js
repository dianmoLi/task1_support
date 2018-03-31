describe("测试点赞+1组件",function(){
	it("点击显示框变化",function(){
		if($("#praiseDiv").click()){
			expect($("#infoSpan").text()).toBe($("#infoSpan").text()+1);
		}
	});
});