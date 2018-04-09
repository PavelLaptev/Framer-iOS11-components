require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"iOS11KitComponents/StatusBariPhoneX":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.StatusBariPhoneX = (function(superClass) {
  extend(StatusBariPhoneX, superClass);

  function StatusBariPhoneX(opt) {
    var currentTime;
    this.opt = opt != null ? opt : {};
    StatusBariPhoneX.__super__.constructor.call(this, _.defaults(this.opt, {
      x: 0,
      y: 0,
      name: "statusBar",
      width: Screen.width,
      height: 44,
      backgroundColor: null,
      updateTime: false,
      signalIcon: "modules/iOS11KitComponents/images/signal.svg",
      wifiIcon: "modules/iOS11KitComponents/images/wifi.svg",
      batteryIcon: "modules/iOS11KitComponents/images/battery.svg"
    }, currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })));
    this.style["filter"] = "invert(0)";
    this.time = new TextLayer({
      name: "time",
      parent: this,
      color: this.opt.timeColor,
      text: currentTime,
      fontWeight: 700,
      fontSize: 15,
      color: "black",
      x: 28,
      y: 14,
      textAlign: "center"
    });
    this.signal = new Layer({
      name: "signal",
      parent: this,
      width: 17,
      height: 11,
      x: Align.right(-64),
      y: 18,
      image: this.opt.signalIcon
    });
    this.wifi = new Layer({
      name: "wifi",
      parent: this,
      width: 15,
      height: 11,
      x: Align.right(-44),
      y: 18,
      image: this.opt.wifiIcon
    });
    this.battery = new Layer({
      name: "battery",
      parent: this,
      width: 24,
      height: 11,
      x: Align.right(-14),
      y: 18,
      image: this.opt.batteryIcon
    });
    this.updateTimeFoo(this.opt.updateTime, this.time);
  }

  StatusBariPhoneX.prototype.updateTimeFoo = function(val, timeLayer) {
    if (val) {
      return Utils.interval(1, function() {
        return timeLayer.text = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        });
      });
    }
  };

  StatusBariPhoneX.prototype.switchTheme = function(time) {
    if (time == null) {
      time = 0.2;
    }
    this.style["transition"] = "all " + time + "s";
    if (this.style["filter"] === "invert(0)") {
      return this.style["filter"] = "invert(1)";
    } else {
      return this.style["filter"] = "invert(0)";
    }
  };

  return StatusBariPhoneX;

})(Layer);


},{}],"iOS11Kit":[function(require,module,exports){
var StatusBariPhoneX;

StatusBariPhoneX = require('iOS11KitComponents/StatusBariPhoneX').StatusBariPhoneX;

exports.StatusBariPhoneX = StatusBariPhoneX;


},{"iOS11KitComponents/StatusBariPhoneX":"iOS11KitComponents/StatusBariPhoneX"}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvaU9TMTFLaXQuY29mZmVlIiwiLi4vbW9kdWxlcy9pT1MxMUtpdENvbXBvbmVudHMvU3RhdHVzQmFyaVBob25lWC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIntTdGF0dXNCYXJpUGhvbmVYfSA9IHJlcXVpcmUoJ2lPUzExS2l0Q29tcG9uZW50cy9TdGF0dXNCYXJpUGhvbmVYJylcbmV4cG9ydHMuU3RhdHVzQmFyaVBob25lWCA9IFN0YXR1c0JhcmlQaG9uZVgiLCJjbGFzcyBleHBvcnRzLlN0YXR1c0JhcmlQaG9uZVggZXh0ZW5kcyBMYXllclxuXG5cdGNvbnN0cnVjdG9yOiAoQG9wdD17fSkgLT5cblx0XHRzdXBlciBfLmRlZmF1bHRzIEBvcHQsXG5cdFx0XHR4OiAwLCB5OiAwXG5cdFx0XHRuYW1lOiBcInN0YXR1c0JhclwiXG5cdFx0XHR3aWR0aDogU2NyZWVuLndpZHRoXG5cdFx0XHRoZWlnaHQ6IDQ0XG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdHVwZGF0ZVRpbWU6IGZhbHNlXG5cdFx0XHRzaWduYWxJY29uOiBcIm1vZHVsZXMvaU9TMTFLaXRDb21wb25lbnRzL2ltYWdlcy9zaWduYWwuc3ZnXCJcblx0XHRcdHdpZmlJY29uOiBcIm1vZHVsZXMvaU9TMTFLaXRDb21wb25lbnRzL2ltYWdlcy93aWZpLnN2Z1wiXG5cdFx0XHRiYXR0ZXJ5SWNvbjogXCJtb2R1bGVzL2lPUzExS2l0Q29tcG9uZW50cy9pbWFnZXMvYmF0dGVyeS5zdmdcIlxuXG5cdFx0XHRjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7aG91cjogJzItZGlnaXQnLCBtaW51dGU6JzItZGlnaXQnfSlcblxuXHRcdEAuc3R5bGVbXCJmaWx0ZXJcIl0gPSBcImludmVydCgwKVwiXG5cblx0XHRAdGltZSA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdG5hbWU6IFwidGltZVwiXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdGNvbG9yOiBAb3B0LnRpbWVDb2xvclxuXHRcdFx0dGV4dDogY3VycmVudFRpbWVcblx0XHRcdGZvbnRXZWlnaHQ6IDcwMFxuXHRcdFx0Zm9udFNpemU6IDE1XG5cdFx0XHRjb2xvcjogXCJibGFja1wiXG5cdFx0XHR4OiAyOCwgeTogMTRcblx0XHRcdHRleHRBbGlnbjogXCJjZW50ZXJcIlxuXHRcdEBzaWduYWwgPSBuZXcgTGF5ZXJcblx0XHRcdG5hbWU6IFwic2lnbmFsXCJcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0d2lkdGg6IDE3LCBoZWlnaHQ6IDExXG5cdFx0XHR4OiBBbGlnbi5yaWdodCgtNjQpLCB5OiAxOFxuXHRcdFx0aW1hZ2U6IEBvcHQuc2lnbmFsSWNvblxuXHRcdEB3aWZpID0gbmV3IExheWVyXG5cdFx0XHRuYW1lOiBcIndpZmlcIlxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR3aWR0aDogMTUsIGhlaWdodDogMTFcblx0XHRcdHg6IEFsaWduLnJpZ2h0KC00NCksIHk6IDE4XG5cdFx0XHRpbWFnZTogQG9wdC53aWZpSWNvblxuXHRcdEBiYXR0ZXJ5ID0gbmV3IExheWVyXG5cdFx0XHRuYW1lOiBcImJhdHRlcnlcIlxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR3aWR0aDogMjQsIGhlaWdodDogMTFcblx0XHRcdHg6IEFsaWduLnJpZ2h0KC0xNCksIHk6IDE4XG5cdFx0XHRpbWFnZTogQG9wdC5iYXR0ZXJ5SWNvblxuXHRcdFx0XG5cdFx0QHVwZGF0ZVRpbWVGb28oQG9wdC51cGRhdGVUaW1lLCBAdGltZSlcblxuXHR1cGRhdGVUaW1lRm9vOiAodmFsLCB0aW1lTGF5ZXIpIC0+XG5cdFx0aWYgdmFsXG5cdFx0XHRVdGlscy5pbnRlcnZhbCAxLCAtPlxuXHRcdFx0XHR0aW1lTGF5ZXIudGV4dCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7aG91cjogJzItZGlnaXQnLCBtaW51dGU6JzItZGlnaXQnfSlcblx0XG5cdHN3aXRjaFRoZW1lOiAodGltZSkgLT5cblx0XHR0aW1lID89IDAuMlxuXHRcdEAuc3R5bGVbXCJ0cmFuc2l0aW9uXCJdID0gXCJhbGwgXCIgKyB0aW1lICsgXCJzXCJcblx0XHRpZiBALnN0eWxlW1wiZmlsdGVyXCJdIGlzIFwiaW52ZXJ0KDApXCJcblx0XHRcdEAuc3R5bGVbXCJmaWx0ZXJcIl0gPSBcImludmVydCgxKVwiXG5cdFx0ZWxzZVxuXHRcdFx0QC5zdHlsZVtcImZpbHRlclwiXSA9IFwiaW52ZXJ0KDApXCIiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBREFBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBRUEsMEJBQUMsR0FBRDtBQUNaLFFBQUE7SUFEYSxJQUFDLENBQUEsb0JBQUQsTUFBSztJQUNsQixrREFBTSxDQUFDLENBQUMsUUFBRixDQUFXLElBQUMsQ0FBQSxHQUFaLEVBQ0w7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
