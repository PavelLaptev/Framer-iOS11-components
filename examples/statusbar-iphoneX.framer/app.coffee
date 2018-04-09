iOS11Kit = require 'iOS11Kit'

switchSpeed = 0.2

statusBar = new iOS11Kit.StatusBariPhoneX
	updateTime: true

# Swithcer and screen states

switcher.states =
	active:
		backgroundColor: "white"
	animationOptions:
		time: switchSpeed

switcherItem.states =
	active:
		backgroundColor: on_switcher.children[0].props.color
		x: Align.right(-4)
	animationOptions:
		time: switchSpeed

Light_mode.states =
	active:		
		image: Dark_mode.image
	animationOptions:
		time: switchSpeed

navTitle.states = 
	active:
		color: "white"
	animationOptions:
		time: 0

mainTitle.states = 
	active:
		text: "Switch to Light mode"
		color: "white"
	animationOptions:
		time: 0

Light_mode.onTap ->
	switcher.stateCycle()
	switcherItem.stateCycle()
	Light_mode.stateCycle()
	navTitle.stateCycle()
	mainTitle.stateCycle()	
	
	statusBar.switchTheme(switchSpeed)
