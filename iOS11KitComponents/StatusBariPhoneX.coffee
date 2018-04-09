class exports.StatusBariPhoneX extends Layer

	constructor: (@opt={}) ->
		super _.defaults @opt,
			x: 0, y: 0
			name: "statusBar"
			width: Screen.width
			height: 44
			backgroundColor: null
			updateTime: false
			signalIcon: "modules/iOS11KitComponents/images/signal.svg"
			wifiIcon: "modules/iOS11KitComponents/images/wifi.svg"
			batteryIcon: "modules/iOS11KitComponents/images/battery.svg"

			currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

		@.style["filter"] = "invert(0)"

		@time = new TextLayer
			name: "time"
			parent: @
			color: @opt.timeColor
			text: currentTime
			fontWeight: 700
			fontSize: 15
			color: "black"
			x: 28, y: 14
			textAlign: "center"
		@signal = new Layer
			name: "signal"
			parent: @
			width: 17, height: 12
			x: Align.right(-64), y: 18
			image: @opt.signalIcon
		@wifi = new Layer
			name: "wifi"
			parent: @
			width: 15, height: 12
			x: Align.right(-44), y: 18
			image: @opt.wifiIcon
		@battery = new Layer
			name: "battery"
			parent: @
			width: 25, height: 12
			x: Align.right(-14), y: 18
			image: @opt.batteryIcon
			
		@updateTimeFoo(@opt.updateTime, @time)

	updateTimeFoo: (val, timeLayer) ->
		if val
			Utils.interval 1, ->
				timeLayer.text = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
	
	switchMode: (time) ->
		time ?= 0.2
		@.style["transition"] = "all " + time + "s"
		if @.style["filter"] is "invert(0)"
			@.style["filter"] = "invert(1)"
		else
			@.style["filter"] = "invert(0)"