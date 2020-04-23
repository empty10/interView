// 给一个事件订阅几个方法，当事件触发的时候依次执行这几个方法
function Event() {
  this.event = {};
}
Event.prototype.on = function (type, callBack) {
  if (this.event[type]) {
    this.event[type].push(callBack);
  } else {
    this.event[type] = [callBack];
  }
};
Event.prototype.emit = function (type, ...data) {
  this.event[type].forEach((item) => item(...data));
};
let event = new Event();
function fn1() {
  console.log("吃饭");
}
function fn2() {
  console.log("工作");
}
event.on("我的一天", fn1);
event.on("你的一天", fn2);
event.emit("我的一天");
