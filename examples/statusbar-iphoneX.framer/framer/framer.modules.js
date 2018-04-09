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
      height: 12,
      x: Align.right(-64),
      y: 18,
      image: this.opt.signalIcon
    });
    this.wifi = new Layer({
      name: "wifi",
      parent: this,
      width: 15,
      height: 12,
      x: Align.right(-44),
      y: 18,
      image: this.opt.wifiIcon
    });
    this.battery = new Layer({
      name: "battery",
      parent: this,
      width: 25,
      height: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvQmxpbmQgSG9yc2UvR29vZ2xlIERyaXZlL0dpdEh1Yl9yZXBvL0ZyYW1lci1pT1MxMS1jb21wb25lbnRzL2V4YW1wbGVzL3N0YXR1c2Jhci1pcGhvbmVYLmZyYW1lci9tb2R1bGVzL2lPUzExS2l0LmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1ZvbHVtZXMvQmxpbmQgSG9yc2UvR29vZ2xlIERyaXZlL0dpdEh1Yl9yZXBvL0ZyYW1lci1pT1MxMS1jb21wb25lbnRzL2V4YW1wbGVzL3N0YXR1c2Jhci1pcGhvbmVYLmZyYW1lci9tb2R1bGVzL2lPUzExS2l0Q29tcG9uZW50cy9TdGF0dXNCYXJpUGhvbmVYLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsie1N0YXR1c0JhcmlQaG9uZVh9ID0gcmVxdWlyZSgnaU9TMTFLaXRDb21wb25lbnRzL1N0YXR1c0JhcmlQaG9uZVgnKVxuZXhwb3J0cy5TdGF0dXNCYXJpUGhvbmVYID0gU3RhdHVzQmFyaVBob25lWCIsImNsYXNzIGV4cG9ydHMuU3RhdHVzQmFyaVBob25lWCBleHRlbmRzIExheWVyXG5cblx0Y29uc3RydWN0b3I6IChAb3B0PXt9KSAtPlxuXHRcdHN1cGVyIF8uZGVmYXVsdHMgQG9wdCxcblx0XHRcdHg6IDAsIHk6IDBcblx0XHRcdG5hbWU6IFwic3RhdHVzQmFyXCJcblx0XHRcdHdpZHRoOiBTY3JlZW4ud2lkdGhcblx0XHRcdGhlaWdodDogNDRcblx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0dXBkYXRlVGltZTogZmFsc2Vcblx0XHRcdHNpZ25hbEljb246IFwibW9kdWxlcy9pT1MxMUtpdENvbXBvbmVudHMvaW1hZ2VzL3NpZ25hbC5zdmdcIlxuXHRcdFx0d2lmaUljb246IFwibW9kdWxlcy9pT1MxMUtpdENvbXBvbmVudHMvaW1hZ2VzL3dpZmkuc3ZnXCJcblx0XHRcdGJhdHRlcnlJY29uOiBcIm1vZHVsZXMvaU9TMTFLaXRDb21wb25lbnRzL2ltYWdlcy9iYXR0ZXJ5LnN2Z1wiXG5cblx0XHRcdGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTonMi1kaWdpdCd9KVxuXG5cdFx0QC5zdHlsZVtcImZpbHRlclwiXSA9IFwiaW52ZXJ0KDApXCJcblxuXHRcdEB0aW1lID0gbmV3IFRleHRMYXllclxuXHRcdFx0bmFtZTogXCJ0aW1lXCJcblx0XHRcdHBhcmVudDogQFxuXHRcdFx0Y29sb3I6IEBvcHQudGltZUNvbG9yXG5cdFx0XHR0ZXh0OiBjdXJyZW50VGltZVxuXHRcdFx0Zm9udFdlaWdodDogNzAwXG5cdFx0XHRmb250U2l6ZTogMTVcblx0XHRcdGNvbG9yOiBcImJsYWNrXCJcblx0XHRcdHg6IDI4LCB5OiAxNFxuXHRcdFx0dGV4dEFsaWduOiBcImNlbnRlclwiXG5cdFx0QHNpZ25hbCA9IG5ldyBMYXllclxuXHRcdFx0bmFtZTogXCJzaWduYWxcIlxuXHRcdFx0cGFyZW50OiBAXG5cdFx0XHR3aWR0aDogMTcsIGhlaWdodDogMTJcblx0XHRcdHg6IEFsaWduLnJpZ2h0KC02NCksIHk6IDE4XG5cdFx0XHRpbWFnZTogQG9wdC5zaWduYWxJY29uXG5cdFx0QHdpZmkgPSBuZXcgTGF5ZXJcblx0XHRcdG5hbWU6IFwid2lmaVwiXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHdpZHRoOiAxNSwgaGVpZ2h0OiAxMlxuXHRcdFx0eDogQWxpZ24ucmlnaHQoLTQ0KSwgeTogMThcblx0XHRcdGltYWdlOiBAb3B0LndpZmlJY29uXG5cdFx0QGJhdHRlcnkgPSBuZXcgTGF5ZXJcblx0XHRcdG5hbWU6IFwiYmF0dGVyeVwiXG5cdFx0XHRwYXJlbnQ6IEBcblx0XHRcdHdpZHRoOiAyNSwgaGVpZ2h0OiAxMlxuXHRcdFx0eDogQWxpZ24ucmlnaHQoLTE0KSwgeTogMThcblx0XHRcdGltYWdlOiBAb3B0LmJhdHRlcnlJY29uXG5cdFx0XHRcblx0XHRAdXBkYXRlVGltZUZvbyhAb3B0LnVwZGF0ZVRpbWUsIEB0aW1lKVxuXG5cdHVwZGF0ZVRpbWVGb286ICh2YWwsIHRpbWVMYXllcikgLT5cblx0XHRpZiB2YWxcblx0XHRcdFV0aWxzLmludGVydmFsIDEsIC0+XG5cdFx0XHRcdHRpbWVMYXllci50ZXh0ID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTonMi1kaWdpdCd9KVxuXHRcblx0c3dpdGNoVGhlbWU6ICh0aW1lKSAtPlxuXHRcdHRpbWUgPz0gMC4yXG5cdFx0QC5zdHlsZVtcInRyYW5zaXRpb25cIl0gPSBcImFsbCBcIiArIHRpbWUgKyBcInNcIlxuXHRcdGlmIEAuc3R5bGVbXCJmaWx0ZXJcIl0gaXMgXCJpbnZlcnQoMClcIlxuXHRcdFx0QC5zdHlsZVtcImZpbHRlclwiXSA9IFwiaW52ZXJ0KDEpXCJcblx0XHRlbHNlXG5cdFx0XHRALnN0eWxlW1wiZmlsdGVyXCJdID0gXCJpbnZlcnQoMClcIiIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBRUFBO0FEQUEsSUFBQTs7O0FBQU0sT0FBTyxDQUFDOzs7RUFFQSwwQkFBQyxHQUFEO0FBQ1osUUFBQTtJQURhLElBQUMsQ0FBQSxvQkFBRCxNQUFLO0lBQ2xCLGtEQUFNLENBQUMsQ0FBQyxRQUFGLENBQVcsSUFBQyxDQUFBLEdBQVosRUFDTDtNQUFBLENBQUEsRUFBRyxDQUFIO01BQU0sQ0FBQSxFQUFHLENBQVQ7TUFDQSxJQUFBLEVBQU0sV0FETjtNQUVBLEtBQUEsRUFBTyxNQUFNLENBQUMsS0FGZDtNQUdBLE1BQUEsRUFBUSxFQUhSO01BSUEsZUFBQSxFQUFpQixJQUpqQjtNQUtBLFVBQUEsRUFBWSxLQUxaO01BTUEsVUFBQSxFQUFZLDhDQU5aO01BT0EsUUFBQSxFQUFVLDRDQVBWO01BUUEsV0FBQSxFQUFhLCtDQVJiO0tBREssRUFXTCxXQUFBLEdBQWtCLElBQUEsSUFBQSxDQUFBLENBQU0sQ0FBQyxrQkFBUCxDQUEwQixFQUExQixFQUE4QjtNQUFDLElBQUEsRUFBTSxTQUFQO01BQWtCLE1BQUEsRUFBTyxTQUF6QjtLQUE5QixDQVhiLENBQU47SUFhQSxJQUFDLENBQUMsS0FBTSxDQUFBLFFBQUEsQ0FBUixHQUFvQjtJQUVwQixJQUFDLENBQUEsSUFBRCxHQUFZLElBQUEsU0FBQSxDQUNYO01BQUEsSUFBQSxFQUFNLE1BQU47TUFDQSxNQUFBLEVBQVEsSUFEUjtNQUVBLEtBQUEsRUFBTyxJQUFDLENBQUEsR0FBRyxDQUFDLFNBRlo7TUFHQSxJQUFBLEVBQU0sV0FITjtNQUlBLFVBQUEsRUFBWSxHQUpaO01BS0EsUUFBQSxFQUFVLEVBTFY7TUFNQSxLQUFBLEVBQU8sT0FOUDtNQU9BLENBQUEsRUFBRyxFQVBIO01BT08sQ0FBQSxFQUFHLEVBUFY7TUFRQSxTQUFBLEVBQVcsUUFSWDtLQURXO0lBVVosSUFBQyxDQUFBLE1BQUQsR0FBYyxJQUFBLEtBQUEsQ0FDYjtNQUFBLElBQUEsRUFBTSxRQUFOO01BQ0EsTUFBQSxFQUFRLElBRFI7TUFFQSxLQUFBLEVBQU8sRUFGUDtNQUVXLE1BQUEsRUFBUSxFQUZuQjtNQUdBLENBQUEsRUFBRyxLQUFLLENBQUMsS0FBTixDQUFZLENBQUMsRUFBYixDQUhIO01BR3FCLENBQUEsRUFBRyxFQUh4QjtNQUlBLEtBQUEsRUFBTyxJQUFDLENBQUEsR0FBRyxDQUFDLFVBSlo7S0FEYTtJQU1kLElBQUMsQ0FBQSxJQUFELEdBQVksSUFBQSxLQUFBLENBQ1g7TUFBQSxJQUFBLEVBQU0sTUFBTjtNQUNBLE1BQUEsRUFBUSxJQURSO01BRUEsS0FBQSxFQUFPLEVBRlA7TUFFVyxNQUFBLEVBQVEsRUFGbkI7TUFHQSxDQUFBLEVBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxDQUFDLEVBQWIsQ0FISDtNQUdxQixDQUFBLEVBQUcsRUFIeEI7TUFJQSxLQUFBLEVBQU8sSUFBQyxDQUFBLEdBQUcsQ0FBQyxRQUpaO0tBRFc7SUFNWixJQUFDLENBQUEsT0FBRCxHQUFlLElBQUEsS0FBQSxDQUNkO01BQUEsSUFBQSxFQUFNLFNBQU47TUFDQSxNQUFBLEVBQVEsSUFEUjtNQUVBLEtBQUEsRUFBTyxFQUZQO01BRVcsTUFBQSxFQUFRLEVBRm5CO01BR0EsQ0FBQSxFQUFHLEtBQUssQ0FBQyxLQUFOLENBQVksQ0FBQyxFQUFiLENBSEg7TUFHcUIsQ0FBQSxFQUFHLEVBSHhCO01BSUEsS0FBQSxFQUFPLElBQUMsQ0FBQSxHQUFHLENBQUMsV0FKWjtLQURjO0lBT2YsSUFBQyxDQUFBLGFBQUQsQ0FBZSxJQUFDLENBQUEsR0FBRyxDQUFDLFVBQXBCLEVBQWdDLElBQUMsQ0FBQSxJQUFqQztFQTdDWTs7NkJBK0NiLGFBQUEsR0FBZSxTQUFDLEdBQUQsRUFBTSxTQUFOO0lBQ2QsSUFBRyxHQUFIO2FBQ0MsS0FBSyxDQUFDLFFBQU4sQ0FBZSxDQUFmLEVBQWtCLFNBQUE7ZUFDakIsU0FBUyxDQUFDLElBQVYsR0FBcUIsSUFBQSxJQUFBLENBQUEsQ0FBTSxDQUFDLGtCQUFQLENBQTBCLEVBQTFCLEVBQThCO1VBQUMsSUFBQSxFQUFNLFNBQVA7VUFBa0IsTUFBQSxFQUFPLFNBQXpCO1NBQTlCO01BREosQ0FBbEIsRUFERDs7RUFEYzs7NkJBS2YsV0FBQSxHQUFhLFNBQUMsSUFBRDs7TUFDWixPQUFROztJQUNSLElBQUMsQ0FBQyxLQUFNLENBQUEsWUFBQSxDQUFSLEdBQXdCLE1BQUEsR0FBUyxJQUFULEdBQWdCO0lBQ3hDLElBQUcsSUFBQyxDQUFDLEtBQU0sQ0FBQSxRQUFBLENBQVIsS0FBcUIsV0FBeEI7YUFDQyxJQUFDLENBQUMsS0FBTSxDQUFBLFFBQUEsQ0FBUixHQUFvQixZQURyQjtLQUFBLE1BQUE7YUFHQyxJQUFDLENBQUMsS0FBTSxDQUFBLFFBQUEsQ0FBUixHQUFvQixZQUhyQjs7RUFIWTs7OztHQXREeUI7Ozs7QURBdkMsSUFBQTs7QUFBQyxtQkFBb0IsT0FBQSxDQUFRLHFDQUFSOztBQUNyQixPQUFPLENBQUMsZ0JBQVIsR0FBMkIifQ==
