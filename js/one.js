/**
 * 必传type,message
 * type传global.OrderType[FAULTTYPE],global.OrderType[CHANGETYPE]
 * message为故障描述,到时会直接放入订单的备注里,要用encodeURI
 * 选填  mid(消息ID)/did(设备ID)/  在自助故障查询页里,应确定设备ID并传过来
 * Created by wbw on 2015/9/25.
 */
requirejs(
		['jquery', 'ko', 'webapp2', 'httpclient'],
		function($, ko, webApp,httpclient) {
    var ViewModel = function () {
        var self = this;
        this.name = ko.observable('');

        this.init = function() {
        }
    }
    var vm = new ViewModel();
    ko.applyBindings(vm);
    vm.init();
})