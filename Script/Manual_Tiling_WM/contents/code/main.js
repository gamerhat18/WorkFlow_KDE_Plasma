(function () {
	"use strict";

	var config = {
		// Default Enable / Disable
		// is_window_group: false,
		// is_tiling_grid: false,

		ignoreMaximized: true,
		ignoreShaded: true,
		liveUpdate: true,
		// opacity: 0.5,
		opacity: 1,
	};

	workspace.floatGeometry = {};




	// Default FallBack
	var snap_size_h = 6;
	var snap_size_v = 4;
	if (readConfig('snap_size_h', snap_size_h)) {
		snap_size_h = Number(readConfig('snap_size_h', snap_size_h));
	}
	if (readConfig('snap_size_v', snap_size_v)) {
		snap_size_v = Number(readConfig('snap_size_v', snap_size_v));
	}

	// Horizontal Size
	registerShortcut(
		"ManualTilingWM_H_1_1",
		"Manual Tiling WM: Size >> Horizontal 1/1",
		"Meta+Ctrl+1",
		function () {
			snap_size_h = 1;
			writeConfig('snap_size_h', 1);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_2",
		"Manual Tiling WM: Size >> Horizontal 1/2",
		"Meta+Ctrl+2",
		function () {
			snap_size_h = 2;
			writeConfig('snap_size_h', 2);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_3",
		"Manual Tiling WM: Size >> Horizontal 1/3",
		"Meta+Ctrl+3",
		function () {
			snap_size_h = 3;
			writeConfig('snap_size_h', 3);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_4",
		"Manual Tiling WM: Size >> Horizontal 1/4",
		"Meta+Ctrl+4",
		function () {
			snap_size_h = 4;
			writeConfig('snap_size_h', 4);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_5",
		"Manual Tiling WM: Size >> Horizontal 1/5",
		"Meta+Ctrl+5",
		function () {
			snap_size_h = 5;
			writeConfig('snap_size_h', 5);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_6",
		"Manual Tiling WM: Size >> Horizontal 1/6",
		"Meta+Ctrl+6",
		function () {
			snap_size_h = 6;
			writeConfig('snap_size_h', 6);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_7",
		"Manual Tiling WM: Size >> Horizontal 1/7",
		"Meta+Ctrl+7",
		function () {
			snap_size_h = 7;
			writeConfig('snap_size_h', 7);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_8",
		"Manual Tiling WM: Size >> Horizontal 1/8",
		"Meta+Ctrl+8",
		function () {
			snap_size_h = 8;
			writeConfig('snap_size_h', 8);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_9",
		"Manual Tiling WM: Size >> Horizontal 1/9",
		"Meta+Ctrl+9",
		function () {
			snap_size_h = 9;
			writeConfig('snap_size_h', 9);
		}
	);
	registerShortcut(
		"ManualTilingWM_H_1_10",
		"Manual Tiling WM: Size >> Horizontal 1/10",
		"Meta+Ctrl+0",
		function () {
			snap_size_h = 10;
			writeConfig('snap_size_h', 10);
		}
	);

	// Vertical Size
	registerShortcut(
		"ManualTilingWM_V_1_1",
		"Manual Tiling WM: Size >> Vertical 1/1",
		"Meta+Shift+1",
		function () {
			snap_size_v = 1;
			writeConfig('snap_size_v', 1);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_2",
		"Manual Tiling WM: Size >> Vertical 1/2",
		"Meta+Shift+2",
		function () {
			snap_size_v = 2;
			writeConfig('snap_size_v', 2);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_3",
		"Manual Tiling WM: Size >> Vertical 1/3",
		"Meta+Shift+3",
		function () {
			snap_size_v = 3;
			writeConfig('snap_size_v', 3);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_4",
		"Manual Tiling WM: Size >> Vertical 1/4",
		"Meta+Shift+4",
		function () {
			snap_size_v = 4;
			writeConfig('snap_size_v', 4);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_5",
		"Manual Tiling WM: Size >> Vertical 1/5",
		"Meta+Shift+5",
		function () {
			snap_size_v = 5;
			writeConfig('snap_size_v', 5);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_6",
		"Manual Tiling WM: Size >> Vertical 1/6",
		"Meta+Shift+6",
		function () {
			snap_size_v = 6;
			writeConfig('snap_size_v', 6);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_7",
		"Manual Tiling WM: Size >> Vertical 1/7",
		"Meta+Shift+7",
		function () {
			snap_size_v = 7;
			writeConfig('snap_size_v', 7);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_8",
		"Manual Tiling WM: Size >> Vertical 1/8",
		"Meta+Shift+8",
		function () {
			snap_size_v = 8;
			writeConfig('snap_size_v', 8);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_9",
		"Manual Tiling WM: Size >> Vertical 1/9",
		"Meta+Shift+9",
		function () {
			snap_size_v = 9;
			writeConfig('snap_size_v', 9);
		}
	);
	registerShortcut(
		"ManualTilingWM_V_1_10",
		"Manual Tiling WM: Size >> Vertical 1/10",
		"Meta+Shift+0",
		function () {
			snap_size_v = 10;
			writeConfig('snap_size_v', 10);
		}
	);


	// move(workspace, numberXslots, numberYslots, SlotPosX, SlotPosY, FillSlotSizeWidth, FillSlotSizeHeight)
	// Corner
	registerShortcut(
		"ManualTilingWM_UpLeft",
		"Manual Tiling WM: Position >> Up Left",
		"Meta+Ctrl+Q",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileTopLeft();
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_UpRight",
		"Manual Tiling WM: Position >> Up Right",
		"Meta+Ctrl+E",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileTopRight();
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_DownRight",
		"Manual Tiling WM: Position >> Down Right",
		"Meta+Ctrl+C",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileBottomRight();
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_DownLeft",
		"Manual Tiling WM: Position >> Down Left",
		"Meta+Ctrl+Z",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileBottomLeft();
			// client.tiled = true;
		}
	);


	// Left / Right
	registerShortcut(
		"ManualTilingWM_Left",
		"Manual Tiling WM: Position >> Left",
		"Meta+Ctrl+A",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileLeft();
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_Right",
		"Manual Tiling WM: Position >> Right",
		"Meta+Ctrl+D",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileRight();
			// client.tiled = true;
		}
	);


	// Top / Bottom / Maximize
	registerShortcut(
		"ManualTilingWM_CenterTop",
		"Manual Tiling WM: Position >> Up",
		"Meta+Ctrl+W",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileTop();
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_CenterBottom",
		"Manual Tiling WM: Position >> Down",
		"Meta+Ctrl+X",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowQuickTileBottom();
			// client.tiled = true;
		}
	);
	registerShortcut(
		"ManualTilingWM_Center",
		"Manual Tiling WM: Position >> Center",
		"Meta+Ctrl+S",
		function () {
			// if (!workspace.activeClient.tiled) workspace.floatGeometry[workspace.activeClient.frameId] = JSON.parse(JSON.stringify(workspace.activeClient.geometry));
			workspace.slotWindowMaximize();
			// client.tiled = true;
		}
	);


	// General
	// registerShortcut(
	//     "ManualTilingWM_Maximize",
	//     "Manual Tiling WM: Maximize (With Border)",
	//     "Meta+R",
	//     function () {
	//         move(workspace, 1, 1, 0, 0, 1, 1);
	//     });

	// registerShortcut("MoveWindowToCenter", "Manual Tiling WM: Put Center", "ctrl+Num+5", function () {
	//     center(workspace);
	// });




	// var snaps = [];
	// var snaps = {};

	function init() {
		var clients = workspace.clientList();
		for (var i = 0; i < clients.length; i++) {
			connectClient(clients[i]);
		}
		workspace.clientAdded.connect(connectClient);
		workspace.clientRemoved.connect(clientRemoved);

		// registerShortcut(
		// 	"Float_Group",
		// 	"Manual Tiling WM| StickLess (Float Single) / StickAble (Window Group) |Per Window",
		// 	"Meta+Ctrl+V",
		// 	function () {
		// 		var client = workspace.activeClient;
		// 		client.is_window_group = config.is_window_group;
		// 		if (client.is_window_group) {
		// 			client.is_window_group = false;
		// 			findSnap(client, workspace.clientList());
		// 		} else {
		// 			client.is_window_group = true;
		// 			findSnap(client, workspace.clientList());
		// 		}
		// 	}
		// );

		// registerShortcut(
		// 	"Group_Tiling",
		// 	"Manual Tiling WM| Near (Window Group) / Far (Tiling Grid) |Per Window",
		// 	"Meta+Ctrl+F",
		// 	function () {
		// 		var client = workspace.activeClient;
		// 		client.is_tiling_grid = config.is_tiling_grid;
		// 		if (client.is_tiling_grid) {
		// 			client.is_tiling_grid = false;
		// 			findSnap(client, workspace.clientList());
		// 		} else {
		// 			client.is_tiling_grid = true;
		// 			findSnap(client, workspace.clientList());
		// 		}
		// 	}
		// );

		// Still Complex
		// registerShortcut(
		// 	"Float_Tile",
		// 	"Manual Tiling WM| Float Mode / Tile Mode |Per Window",
		// 	"Meta+Ctrl+V",
		// 	function () {
		// 		var client = workspace.activeClient;
		// 		if (client.is_tile) {
		// 			client.is_tile = false;
		// 			findSnap(client, workspace.clientList());
		// 		} else {
		// 			client.is_tile = true;
		// 			findSnap(client, workspace.clientList());
		// 		}
		// 	}
		// );

		// options.centerSnapZone = 40;
		// FIX: Drag Window To Screen Edge Need Resize First So That It Can Be Border Snap With Other Windows
		// options.borderSnapZone = 40;
		options.borderSnapZone = 0;
		options.windowSnapZone = 40;
	}

	// var previous_active_client_id = null;
	// var activate_lock = false;
	// var windowActivated = function (client) {
	// 	// print(client);
	// 	if (client === null) {
	// 		return;
	// 	} else if (previous_active_client_id === null) {
	// 		previous_active_client_id = client.windowId;
	// 	} else if (previous_active_client_id === client.windowId) {
	// 		return;
	// 	}

	// 	// workspace.clientActivated.disconnect(windowActivated);
	// 	// client.activeChanged.disconnect(windowActivated);

	// 	if (activate_lock == true) return;
	// 	// Find First
	// 	var snapsss = findSnap(client, workspace.clientList());

	// 	// print(snapsss);
	// 	if (!snapsss) return;

	// 	activate_lock = true;
	// 	for (var i = 0; i < snapsss.length; i++) {
	// 		// print(snapsss[i].client);
	// 		// snapsss[i].client.active = true;
	// 		// FIX: System Stop Response
	// 		if (workspace.activeClient != client) {
	// 			workspace.activeClient = snapsss[i].client;
	// 			// print(snapsss[i].client);
	// 		}
	// 	}
	// 	activate_lock = false;

	// 	// workspace.clientActivated.connect(windowActivated);
	// 	// client.activeChanged.connect(windowActivated);

	// 	// var i = 0;
	// 	// function forLoop() {
	// 	// 	if (i < snapsss.length) {
	// 	// 		process();
	// 	// 	}
	// 	// }
	// 	// function process() {
	// 	// 	workspace.activeClient = snapsss[i].client;
	// 	// 	i++;
	// 	// 	setTimeout(forLoop(), 500);
	// 	// }
	// 	// forLoop();
	// };

	function connectClient(client) {
		if (client.specialWindow) return;
		client.clientStartUserMovedResized.connect(clientStartUserMovedResized);
		if (config.liveUpdate)
			client.clientStepUserMovedResized.connect(clientStepUserMovedResized);
		client.clientFinishUserMovedResized.connect(clientFinishUserMovedResized);

		client.geometryShapeChanged.connect(geometryShapeChanged);
		client.geometryChanged.connect(function () {
			// if (!client.move) {
			// 	// if (rect != client.geometry) {
			// 		clientResized(client, client.geometry, snapsss[client.windowId]);
			// 	// }
			// }
		});
		client.shapedChanged.connect(function () {
			// if (!client.move) {
			// 	// if (rect != client.geometry) {
			// 		clientResized(client, client.geometry, snapsss[client.windowId]);
			// 	// }
			// }
		});


		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	// if (workspace.floatGeometry[client.frameId]) {
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// 	// }
		// }




		// client.clientMinimized.connect(function (client) {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.minimized = true;
		// 	}
		// });
		// client.clientUnminimized.connect(function (client) {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.minimized = false;
		// 	}
		// });

		// workspace.clientMaximizeSet.connect(function (client, h, v) {
		// print("MAX");
		// 	// client.borderlessMaximizedWindows = false;
		// 	// client.geometry = workspace.clientArea(KWin.MaximizeArea, client.screen, client.desktop);
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.maximized = true;
		// 		// snapsss[i].client.geometry = workspace.clientArea(KWin.MaximizeArea, client.screen, client.desktop);
		// 		// callDBus();
		// 	}
		// });
		// workspace.clientRestored.connect(function (client) {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.maximized = false;
		// 	}
		// });

		// client.shadeChanged.connect(function () {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.shade = client.shade;
		// 	}
		// });

		// client.keepAboveChanged.connect(function () {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		snapsss[i].client.keepAbove = client.keepAbove;
		// 		// snapsss[i].client.keepBelow = false;
		// 		// print(snapsss[i].client.keepAbove);
		// 	}
		// });
		// client.keepBelowChanged.connect(function () {
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.keepAbove = false;
		// 		snapsss[i].client.keepBelow = client.keepBelow;
		// 		// print(snapsss[i].client.keepBelow);
		// 	}
		// });

		// workspace.currentDesktopChanged.connect(function (desktop, client) {
		// 	if(!client) return;
		// var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	for (var i = 0; i < snapsss.length; i++) {
		// 		// snapsss[i].client.onAllDesktops = client.onAllDesktops;
		// 		snapsss[i].client.desktop = client.desktop;
		// 	}
		// });

		workspace.clientActivated.connect(function (client) {
			// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
			// ReCheck Snap: FIX: UnWanted Snap
			// findSnap(client, workspace.clientList());
		});

		// client.activeChanged.connect(function () {
		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// 	findSnap(client, workspace.clientList());
		// });
	}




	function newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
		var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
		var width;
		if (x == numberXslots) {
			width = Math.floor(maxArea.width / numberXslots);
		} else {
			width = Math.ceil(maxArea.width / numberXslots);
		}

		var height;
		if (y == numberYslots) {
			height = Math.floor(maxArea.height / numberYslots);
		} else {
			height = Math.ceil(maxArea.height / numberYslots);
		}

		var newX = maxArea.x + width * x;
		var newY = maxArea.y + height * y;
		return [newX, newY, width * xSlotToFill, height * ySlotToFill]
	}

	function reposition(client, newX, newY, w, h) {
		client.geometry = {
			x: newX,
			y: newY,
			width: w,
			height: h
		};
	}

	function move(workspace, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill) {
		var client = workspace.activeClient;
		if (client.moveable) {
			arr = newSlotPosition(workspace, client, numberXslots, numberYslots, x, y, xSlotToFill, ySlotToFill);
			var newX = arr[0],
				newY = arr[1],
				w = arr[2],
				h = arr[3];
			reposition(client, newX, newY, w, h)
		}
	}

	function center(workspace) {
		var client = workspace.activeClient;
		if (client.moveable) {
			var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
			var newX = maxArea.x + ((maxArea.width - client.width) / 2);
			var newY = maxArea.y + ((maxArea.height - client.height) / 2);
			reposition(client, newX, newY, client.width, client.height)
		}
	}




	// function recursiveFind(client) {
	// 	var nearclist = findSnap(client, workspace.clientList());
	// 	if (!nearclist) return;

	// 	for (var i = 0; i < nearclist.length; i++) {
	// 		print(nearclist[i].client);

	// 		recursiveFind(nearclist[i].client);
	// 	}

	// 	nearclist.pop(client);
	// }

	function clientRemoved(client) {
		// 	var snapsss = findSnap(client, workspace.clientList());
		// 	if (!snapsss) return;
		// 	var i = 0;
		// 	while (i < snapsss.length) {
		// 		if (snapsss[i].client === client) {
		// 			snapsss.splice(i, 1);
		// 		} else {
		// 			++i;
		// 		}
		// 	}
	}




	function findSnap(client, clients) {
		// Reset All Opacity
		for (var i = 0; i < clients.length; i++) {
			clients[i].opacity = 1;
		}

		// Error: Move To Tile, Resize, Layout Changed
		// Error: Move To Float, Resize, Layout Changed
		// client.startGeometry = client.geometry;

		// If Focus Is Tile Continue
		// if (!client.is_window_group) return;

		// client.snaps = [];
		// var clients = clients;
		// print(client);

		// snaps[client.windowId] = [];
		// FIX: Some Window DoesNot Resize
		// snaps[client.windowId].length = 0;

		// FIX: TypeError: Result of expression 'client.geometry' [undefined] is not an object.
		if (!client) return;
		if (!client.geometry) return;
		var l1 = client.geometry.x;
		var r1 = client.geometry.width + l1;
		var t1 = client.geometry.y;
		var b1 = client.geometry.height + t1;

		var tsnaps = [];

		for (var i = 0; i < clients.length; i++) {
			// If Target Is Tile Continue
			// if (!clients[i].is_window_group) continue;

			// print(clients[i]);
			if (!clients[i].geometry) continue;
			// print(clients[i]);

			var c = clients[i];
			var g = c.geometry;
			var l2 = g.x;
			var r2 = g.width + l2;
			var t2 = g.y;
			var b2 = g.height + t2;

			// print(client);

			if (c == client) continue;
			if (c.specialWindow) continue;
			if (c.fullScreen) continue;
			// FIX: Conflict With Simple Window Groups (Show On All Desktop & Activies)
			// Prevent Resize Window Together Inside Differrent Desktop
			if (c.desktop !== workspace.currentDesktop) continue;
			if (c.screen !== client.screen) continue;
			// if (config.ignoreShaded && c.shade) continue;
			if (config.ignoreMaximized && shallowEquals(g, workspace.clientArea(workspace.MaximizeArea, c))) continue;
			if (c.activities.length !== 0 && c.activities.indexOf(workspace.currentActivity) === -1) continue;
			// print(client);


			// FIX: (snap.lr || snap.rl) undefined
			var snap = {
				lr: false,
				rl: false,
				tb: false,
				bt: false,

				ll: false,
				rr: false,
				tt: false,
				bb: false,

				client: c,
				// startGeometry: c.geometry
			};




			// FIX: Window Size DoesNot Change
			// var sz = options.windowSnapZone * 2;
			// FIX: Layout Window Size Change
			// Easy Snap Tiling Layout, But Mess Up Floating Window
			// var sz = options.windowSnapZone;
			var sz = 0;
			// print(sz);


			// If Focus Is Far
			// Main In Left
			if (r1 + sz >= l2 && r1 - sz <= l2) snap.rl = true;
			// Main In Right
			if (l1 + sz >= r2 && l1 - sz <= r2) snap.lr = true;

			// Main In Top
			if (b1 + sz >= t2 && b1 - sz <= t2) snap.bt = true;
			// Main In Bottom
			if (t1 + sz >= b2 && t1 - sz <= b2) snap.tb = true;

			// //////// Line ////////
			if (l1 + sz >= l2 && l1 - sz <= l2) snap.ll = true;
			if (r1 + sz >= r2 && r1 - sz <= r2) snap.rr = true;

			if (t1 + sz >= t2 && t1 - sz <= t2) snap.tt = true;
			if (b1 + sz >= b2 && b1 - sz <= b2) snap.bb = true;


			// //////// Line ////////
			// if (snap.ll && (t1 == b2 || b1 == t2)) snap.ll = true;
			// if (snap.rr && (t1 == b2 || b1 == t2)) snap.rr = true;

			// if (snap.tt && (l1 == r2 || r1 == l2)) snap.tt = true;
			// if (snap.bb && (l1 == r2 || r1 == l2)) snap.bb = true;

			// print(client);




			var cp = workspace.clientArea(workspace.PlacementArea, client);

			//////////////// One Far Mode Sticky With Float, So Corner Near Mode ////////////////
			//////////////// Corner Near Mode CanNot Resize Far Window, Need Recursive Check & Resize ////////////////
			// If Snapped
			// if (snap.lr || snap.ll || snap.rl || snap.rr || snap.tb || snap.tt || snap.bt || snap.bb) {
			// FIX: (snap.lr || snap.rl) undefined
			// if (!(snap.lr == undefined && snap.ll == undefined && snap.rl == undefined && snap.rr == undefined && snap.tb == undefined && snap.tt == undefined && snap.bt == undefined && snap.bb == undefined)) continue;
			if (
				// snap.client.is_tile && client.is_tile &&
				// snap.client &&
				// (
				// Style Control
				// Three Snap Window, Resize Side Window, Resize All
				// One Easy For Layout, Hard To Float
				// snap.lr ||
				// snap.rl ||
				// snap.tb ||
				// snap.bt ||

				// Only Near
				((snap.lr || snap.rl) && (snap.tb || snap.bt)) ||

				// Only Near
				(snap.rl && ((t1 >= t2 && t1 < b2) || (b1 > t2 && b1 <= b2))) ||
				(snap.rl && ((t2 >= t1 && t2 < b1) || (b2 > t1 && b2 <= b1))) ||
				(snap.lr && ((t1 >= t2 && t1 < b2) || (b1 > t2 && b1 <= b2))) ||
				(snap.lr && ((t2 >= t1 && t2 < b1) || (b2 > t1 && b2 <= b1))) ||

				(snap.bt && ((l1 >= l2 && l1 < r2) || (r1 > l2 && r1 <= r2))) ||
				(snap.bt && ((l2 >= l1 && l2 < r1) || (r2 > l1 && r2 <= r1))) ||
				(snap.tb && ((l1 >= l2 && l1 < r2) || (r1 > l2 && r1 <= r2))) ||
				(snap.tb && ((l2 >= l1 && l2 < r1) || (r2 > l1 && r2 <= r1))) ||

				// Same Side
				// snap.ll ||
				// snap.rr ||
				// snap.tt ||
				// snap.bb ||

				// Only Near
				(snap.ll && (snap.tb || snap.bt)) ||
				(snap.rr && (snap.tb || snap.bt)) ||
				(snap.tt && (snap.lr || snap.rl)) ||
				(snap.bb && (snap.lr || snap.rl)) ||

				// Parallel Side, But Exclude Full Height Stacked Window
				// ((snap.tt && snap.bb) && snap.client.height != cp.height) ||
				// ((snap.ll && snap.rr) && snap.client.width != cp.width) ||

				// Only Near
				((snap.tt && snap.bb) && (snap.lr || snap.rl) && snap.client.height != cp.height) ||
				((snap.ll && snap.rr) && (snap.tb || snap.bt) && snap.client.width != cp.width)
				// )
			) {
				// print(snap.client);
				// snaps.push(snap);
				// if (!snaps[client.windowId]) continue;
				// if (!snaps[client.windowId].indexOf(snap.client.windowId)) continue;
				// snaps[client.windowId].push(snap);
				tsnaps.push(snap);

				// Condition Passed Set Opacity
				snap.client.opacity = config.opacity;

				// for (var i = 0; i < snaps[client.windowId].length; i++) {
				// print(snaps[client.windowId][i].client);
				// }
				// print(snaps[client.windowId].length);

				// workspace.showOutline(snap.client.geometry);
				// hideOutline();

				// TypeError: Result of expression 'client.snaps' [undefined] is not an object.
				// client.snaps.push(snap);
				// for (var i = 0; i < client.snaps.length; i++) {
				// 	print(snaps[i]);
				// }

				// print(snap.client);
				// Recursive
				// findSnap(snap.client, clients);
			}
		}
		// FIX: Stop Responsive
		// clients.pop(client);
		// recursiveList.pop(client);
		// return snaps[client.windowId];
		return tsnaps;
	}

	// Trigger When Mouse Pressed, But DidNot Move Yet (Only Current)
	// Trigger Before Snap
	// var recursiveList;
	//////////////// Save To Old Geometry List FOR After Geometry Change Check & Resize ////////
	// Must Check & Save Before Resize
	var snapsss = {};

	function clientStartUserMovedResized(client) {
		// recursiveList = workspace.clientList();
		// print("clientStartUserMovedResized");
		// print(client);

		// if (!client.is_window_group) {
		// 	return;
		// }

		// client.startGeometry = client.geometry;
		// print(client.startGeometry.x, client.startGeometry.y, client.startGeometry.width, client.startGeometry.height);

		// var clients;
		// snaps[client.windowId] = [];
		// if (snaps[client.windowId]) {
		// snaps[client.windowId].length = 0;
		// print(snaps[client.windowId].length);
		// clients = snaps[client.windowId];
		// } else {
		// clients = workspace.clientList();
		// findSnap(client, workspace.clientList());
		// }
		// findSnap(client, workspace.clientList());


		// Danger: Trigger Only Current
		// if (client.resize) {
		// if (!client.move) {
		// FIX: Move To Tile, Resize, Layout Changed
		// FIX: Move To Float, Resize, Layout Changed
		// client.startGeometry = client.geometry;
		client.startGeometry = JSON.parse(JSON.stringify(client.geometry));

		// 	clientResized(client, client.geometry);
		// }
		// }

		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// FIX: Recursive Resize
		// Must Check & Save Before Resize
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			var ti = wcl[i].windowId;
			snapsss[ti] = findSnap(wcl[i], wcl);
		}
	}




	// Quick Tile Restore Hack
	function has_moved(client) {
		if ((client.geometry.x > client.startGeometry.x + options.windowSnapZone ||
				client.geometry.x < client.startGeometry.x - options.windowSnapZone) &&
			(client.geometry.y > client.startGeometry.y + options.windowSnapZone ||
				client.geometry.y < client.startGeometry.y - options.windowSnapZone)) {
			return true;
		} else {
			return false;
		}
	}
	// Trigger When Snap / Change (Only Current)
	// Trigger After Window Snap
	function clientStepUserMovedResized(client, rect) {
		// print("clientStepUserMovedResized");
		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// }


		// if (client.move && has_moved(client) && client.tiled) {
		// 	if (workspace.floatGeometry[client.frameId]) {
		// 		var g = {
		// 			x: client.geometry.x + client.geometry.width / 2 - workspace.floatGeometry[client.frameId].width / 2,
		// 			y: client.geometry.y + client.geometry.height / 2 - workspace.floatGeometry[client.frameId].height / 2,
		// 			width: workspace.floatGeometry[client.frameId].width,
		// 			height: workspace.floatGeometry[client.frameId].height,
		// 		}
		// 		client.geometry = g;
		// 	}
		// 	print("Restored: ", client.x, client.y, client.width, client.height);
		// 	client.tiled = false;
		// }




		// recursiveList = workspace.clientList();


		// print(client);
		// print(rect.x, rect.y, rect.width, rect.height);

		// findSnap(client, workspace.clientList());

		// Danger: Trigger Only Current
		// if (client.resize) {
		// 	clientResized(client, rect);
		// }

		// Danger: Trigger Only Current
		// if (client.move) {
		// 	clientMoved(client, client.geometry);
		// }

		// if (snapsss[client.windowId]) {
		// 	// Initial Skip
		// if (client == workspace.activeClient) {
		// 	// // Danger: Trigger Only Current
		// 	if (client.resize) {
		// 		// 		// if (!client.move) {
		// clientResized(client, client.geometry, snapsss[client.windowId]);
		// 		// 		// }
		// 	}
		// }
		// }
	}

	// Trigger When Change (Current & Snapped)
	// Trigger After Window Snap / UnSnap
	// Danger: System Stop Response (clientMoved clientResized .geometry Recursive)
	// Move Window To Snap, And Quickly Move Other, Stop Response
	// Reproduce: Move To Corner (ll || rr) && (tb || bt) Snap, Then Fast Resize Other
	var prev_seconds;

	function has_resized(client) {
		if ((client.geometry.width != client.startGeometry.width) &&
			(client.geometry.height != client.startGeometry.height)) {
			return true;
		} else {
			return false;
		}
	}

	function geometryShapeChanged(client, rect) {
		// print("geometryShapeChanged");

		// print(client);
		// print(client.resize);
		// print(client.move);
		// print(client.windowId);
		// print(rect.x, rect.y, rect.width, rect.height);

		// if (!client.is_window_group) {
		// 	return;
		// }


		// print(client.geometry.x, client.geometry.y, client.geometry.width, client.geometry.height);




		if (client.move) {
			client.moved = true;
		}
		if (client.resize) {
			client.moved = false;
		}

		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// }




		// Quick Tile & Edge Snap
		// Mouse Edge Snap & Keyboard Send
		// var cm = workspace.clientArea(workspace.MaximizeArea, client);
		// print(cm.x, cm.y, cm.width, cm.height);

		var cp = workspace.clientArea(workspace.PlacementArea, client);
		// print("Area: ", cp.x, cp.y, cp.width, cp.height);
		// print("Client: ", client.x, client.y, client.width, client.height);
		// print("Floating");

		// move(workspace, numberXslots, numberYslots, SlotPosX, SlotPosY, FillSlotSizeWidth, FillSlotSizeHeight)
		// DoNot move to Half Recursive Call Frozen
		if (client.x == cp.x && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			// Tile To The Corner
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, 1);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, 1);
			} else {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, 1);
			}
		}
		if (client.x == cp.width / 2 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, 1);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, 1);
			} else {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, 1);
			}
		}
		if (client.x == cp.width / 2 && client.y == cp.height / 2 + cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, snap_size_v - 1, 1, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, snap_size_v - 1, 1, 1);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, snap_size_v - 1, 1, 1);
			} else {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, snap_size_v - 1, 1, 1);
			}
		}
		if (client.x == cp.x && client.y == cp.height / 2 + cp.y && client.width == cp.width / 2 && client.height == cp.height / 2) {
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, 1, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, 1, 1);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, 1, 1);
			} else {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, 1, 1);
			}
		}


		if (client.x == cp.x && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
			// Tile Left / Right
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, snap_size_v);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, snap_size_v);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				// Recursive Call
				// move(workspace, snap_size_h, snap_size_v, 0, 0, 1, snap_size_v);
			} else if (snap_size_v == 1 || snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, 1, snap_size_v);
			} else {
				move(workspace, snap_size_h, snap_size_v, 0, 1, 1, snap_size_v - 2);
			}
		}
		if (client.x == cp.width / 2 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, snap_size_v);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, snap_size_v);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				// Recursive Call
				// move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, snap_size_v);
			} else if (snap_size_v == 1 || snap_size_v == 2) {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 0, 1, snap_size_v);
			} else {
				move(workspace, snap_size_h, snap_size_v, snap_size_h - 1, 1, 1, snap_size_v - 2);
			}
		}


		if (client.x == cp.x && client.y == cp.y && client.width == cp.width && client.height == cp.height / 2) {
			// Tile Center Top / Center Maximize / Center Bottom
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, snap_size_h, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				// Recursive Call
				// move(workspace, snap_size_h, snap_size_v, 0, 0, snap_size_h, 1);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, snap_size_h, 1);
			} else if (snap_size_h == 1 || snap_size_h == 2) {
				move(workspace, snap_size_h, snap_size_v, 0, 0, snap_size_h, 1);
			} else {
				move(workspace, snap_size_h, snap_size_v, 1, 0, snap_size_h - 2, 1);
			}
		}
		if (client.x == cp.x && client.y == cp.height / 2 + cp.y && client.width == cp.width && client.height == cp.height / 2) {
			// client.tiled = true;
			snapsss[client.windowId] = null;
			if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, snap_size_h, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {
				// Recursive Call
				// move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, snap_size_h, 1);
			} else if (snap_size_h == 2 && snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, snap_size_h, 1);
			} else if (snap_size_h == 1 || snap_size_h == 2) {
				move(workspace, snap_size_h, snap_size_v, 0, snap_size_v - 1, snap_size_h, 1);
			} else {
				move(workspace, snap_size_h, snap_size_v, 1, snap_size_v - 1, snap_size_h - 2, 1);
			}
		}
		if (client.x == cp.x && client.y == cp.y && client.width == cp.width && client.height == cp.height) {
			// Working With Breeze Some Decoration Not Work eg. GlassWhite-Kv, Plastik
			// client.tiled = true;
			// snapsss[client.windowId] = null;
			// move(workspace, snap_size_h, snap_size_v, 1, 1, snap_size_h - 2, snap_size_v - 2);

			// client.maximized = false;
			// client.maximizable = false;
			// client.maximizable = true;

			// FIX: Window Maximized, After Tile, Close Window, Open Window
			// Not Work
			// workspace.clientMaximizeSet.connect(function (client, h, v) {
			// 	print("MAX");
			// 	// if (h == true, v == true) {
			// 		client.maximized = false;
			// 	// }
			// });

			// client.geometry = {
			// 	x: cp.width / 4,
			// 	y: cp.y,
			// 	width: cp.width / 2,
			// 	height: cp.height
			// };




			if (snap_size_h == 2 && snap_size_v == 2) {

			} else if (snap_size_h == 1 && snap_size_v == 1) {
				// Recursive Call
				// move(workspace, snap_size_h, snap_size_v, 0, 0, 1, 1);
			} else if (snap_size_h == 1 && snap_size_v == 2) {

			} else if (snap_size_h == 2 && snap_size_v == 1) {
				
			} else if (snap_size_h == 2 || snap_size_h == 1) {
				move(workspace, snap_size_h, snap_size_v, 0, 1, snap_size_h, snap_size_v - 2);
			} else if (snap_size_v == 2 || snap_size_v == 1) {
				move(workspace, snap_size_h, snap_size_v, 1, 0, snap_size_h - 2, snap_size_v);
			} else {
				move(workspace, snap_size_h, snap_size_v, 1, 1, snap_size_h - 2, snap_size_v - 2);
			}

			// if (snap_size_h == 2 && snap_size_v == 2) {} else if (snap_size_h == 1 && snap_size_v == 1) {} else if (snap_size_h == 1 && snap_size_v == 2) {} else if (snap_size_h == 2 && snap_size_v == 1) {} else {
			// 	move(workspace, snap_size_h, snap_size_v, 1, 1, snap_size_h - 2, snap_size_v - 2);
			// }
		}
		if (client.x == cp.width / 4 && client.y == cp.y && client.width == cp.width / 2 && client.height == cp.height) {
			// print(client.maximized);
			// client.maximized = false;
			// client.maximizable = false;
			// client.maximizable = true;
		}




		// Skip Keyboard
		if (!snapsss) return;
		// if (snapsss[client.windowId]) {

		// Find After Change Add Snap Zone To findSnap Check, But Itis Attract Mode
		// Skip Initial
		// if (client != workspace.activeClient) {
		// var snapsss = findSnap(client, workspace.clientList());

		// Danger: Trigger Only Current
		// if (client.resize) {
		if (!client.move) {
			// if (rect != client.geometry) {
			clientResized(client, client.geometry, snapsss[client.windowId]);
			// }
		}
		// }
		// }

		// if (client != workspace.activeClient) {
		// 	var snapsss[client.windowId] = findSnap(client, workspace.clientList());

		// // Danger: Trigger Only Current
		// // if (client.resize) {
		// if (!client.move) {
		// 	clientResized(client, client.geometry, snapsss[client.windowId]);
		// }
		// // }
		// }
		// }




		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// FIX: Recursive Resize
		// Must Check & Save Before Resize
		// FIX: Slow Performance
		// FIX: Glitch Resizing Cause Multiple Signal Emit
		// var wcl = workspace.clientList();
		// for (var i = 0; i < wcl.length; ++i) {
		// 	var ti = wcl[i].windowId;
		// 	snapsss[ti] = findSnap(wcl[i], wcl);
		// }




		// FIX: Slow Performance (Reduce Multiple Signal)
		var date = new Date();
		// print(date.getTime());
		if (date.getTime() - prev_seconds < 50) return;
		prev_seconds = date.getTime();


		// FIX: System Stop Response
		// snaps[client.windowId] = [];
		// if (snaps[client.windowId]) {
		// 	snaps[client.windowId].length = 0;
		// }

		// findSnap(client, workspace.clientList());
	}

	// Trigger When Mouse Release
	function clientFinishUserMovedResized(client) {
		// print("clientFinishUserMovedResized");
		// print(client);
		// findSnap(client, workspace.clientList());

		// FIX: client.geometry undefined
		// Danger: Trigger Only Current
		// if (client.resize) {
		// clientResized(client, rect);
		// }

		// if (client.move) {
		// 	clientMoved(client, client.geometry);
		// }

		// snaps[client.windowId] = [];
		// if (snaps[client.windowId]) {
		// snaps[client.windowId].length = 0;
		// }

		// ReCheck Snap: FIX: DoesNot Trigger Before Snap, Find Before Client Size Change
		// ReCheck Snap: FIX: UnWanted Snap
		// findSnap(client, workspace.clientList());

		// clientStartUserMovedResized(client);

		// clientResized(client, rect);




		// // Quick Tile Enhancements
		// if (client.moved && client.tiled) {
		// 	if (workspace.floatGeometry[client.frameId]) {
		// 		var g = {
		// 			x: client.geometry.x + client.geometry.width / 2 - workspace.floatGeometry[client.frameId].width / 2,
		// 			y: client.geometry.y + client.geometry.height / 2 - workspace.floatGeometry[client.frameId].height / 2,
		// 			width: workspace.floatGeometry[client.frameId].width,
		// 			height: workspace.floatGeometry[client.frameId].height,
		// 		}
		// 		client.geometry = g;
		// 	}
		// 	print("Restored: ", client.x, client.y, client.width, client.height);
		// 	client.tiled = false;
		// }


		// if (!client.tiled) {
		// 	// If IsNot Tiled
		// 	// if (workspace.floatGeometry[client.frameId]) {
		// 	workspace.floatGeometry[client.frameId] = JSON.parse(JSON.stringify(client.geometry));
		// 	print("Saved: ", client.x, client.y, client.width, client.height);
		// 	// }
		// }




		// FIX: Sticky Keyboard
		var wcl = workspace.clientList();
		for (var i = 0; i < wcl.length; ++i) {
			var ti = wcl[i].windowId;
			snapsss[ti] = null;
		}
	}

	function clientResized(client, rect, snapsss) {
		// print("clientResized");

		// Too Late
		// findSnap(client, workspace.clientList());
		// print(snaps[client.windowId]);
		// print(snapsss.length);

		// if (!recursiveList) return;

		// if (!client.resize) return;
		if (!snapsss) return;

		for (var i = 0; i < snapsss.length; ++i) {
			var snap = snapsss[i];
			// print("Snapped: ", snap.client);

			// if (!snap.client.is_window_group) {
			// 	continue;
			// }
			// print(snap.client);

			// Find Before Resize
			// print("findSnap");
			// print(snap, snap.client, snap.client.geometry);
			// findSnap(snap.client, workspace.clientList());
			// findSnap(snap.client, snaps[client.windowId]);


			var to = {
				x: snap.client.geometry.x,
				y: snap.client.geometry.y,
				width: snap.client.geometry.width,
				height: snap.client.geometry.height
			};


			if (snap.lr) moveRto(to, rect.x);
			if (snap.ll) moveLto(to, rect.x);
			if (snap.rl) moveLto(to, rect.x + rect.width);
			if (snap.rr) moveRto(to, rect.x + rect.width);
			if (snap.tb) moveBto(to, rect.y);
			if (snap.tt) moveTto(to, rect.y);
			if (snap.bt) moveTto(to, rect.y + rect.height);
			if (snap.bb) moveBto(to, rect.y + rect.height);
			setGeometry(snap.client, to, snap.lr || snap.rr, snap.tb || snap.bb);


			// Not Work
			// var sz = options.windowSnapZone;
			// if (snap.lr) {
			// 	to.width = rect.x - to.x + sz;
			// 	print("LR");
			// }
			// if (snap.rl) {
			// 	to.width = (to.width + to.x) - (rect.x + rect.width);
			// 	to.x = rect.x + rect.width - sz;
			// 	print("RL");
			// }
			// if (snap.tb) {
			// 	to.height = rect.y - to.y + sz;
			// 	print("TB");
			// }
			// if (snap.bt) {
			// 	to.height = (to.height + to.y) - (rect.y + rect.height);
			// 	to.y = rect.y + rect.height - sz;
			// 	print("BT");
			// }

			// if (snap.ll) {
			// 	to.width = to.width + to.x - rect.x;
			// 	to.x = rect.x - sz;
			// 	print("LL");
			// }
			// if (snap.rr) {
			// 	to.width = rect.x + rect.width - to.x + sz;
			// 	print("RR");
			// }
			// if (snap.tt) {
			// 	to.height = to.height + to.y - rect.y;
			// 	to.y = rect.y - sz;
			// 	print("TT");
			// }
			// if (snap.bb) {
			// 	to.height = rect.y + rect.height - to.y + sz;
			// 	print("BB");
			// }
			// setGeometry(snap.client, to, snap.lr || snap.rr, snap.tb || snap.bb);


			// print(snap.client.geometry.x, snap.client.geometry.y, snap.client.geometry.width, snap.client.geometry.height);
			// snap.client.geometry = to;


			// Recursive
			// print("clientResized");
			// clientResized(snap.client, snap.client.geometry);


			// FIX: System Stop Response
			// snap.client.resize = false;
			// snaps[client.windowId].pop(client);
			// snaps[client.windowId].pop(snap.client);
		}

		// FIX: System Stop Response
		// snaps[client.windowId] = [];
		// snaps[client.windowId].length = 0;
		// recursiveList.pop(client);
	}




	function moveLto(rect, x) {
		rect.width += rect.x - x;
		rect.x = x;
	}

	function moveRto(rect, x) {
		rect.width = x - rect.x;
	}

	function moveTto(rect, y) {
		rect.height += rect.y - y;
		rect.y = y;
	}

	function moveBto(rect, y) {
		rect.height = y - rect.y;
	}




	function setGeometry(client, geometry, pinRightInsteadLeft, pinBottomInsteadTop) {
		// FIX: cannot access member minSize of deleted QObject
		if (!client.minSize) return;
		if (!client.geometry) return;

		var minSize = {
			w: Math.max(client.minSize.w, Math.min(50, client.geometry.width)),
			h: Math.max(client.minSize.h, Math.min(50, client.geometry.height))
		};

		function applySizeConstraints() {
			var old = geometry.width;
			if (geometry.width < minSize.w) geometry.width = minSize.w;
			if (geometry.width > client.maxSize.w) geometry.width = client.maxSize.w;
			if (pinRightInsteadLeft) geometry.x = geometry.x + old - geometry.width;

			old = geometry.height;
			if (geometry.height < minSize.h) geometry.height = minSize.h;
			if (geometry.height > client.maxSize.h) geometry.height = client.maxSize.h;
			if (pinBottomInsteadTop) geometry.y = geometry.y + old - geometry.height;
		}




		applySizeConstraints();
		var ca = workspace.clientArea(workspace.MaximizeArea, client);
		// var ca = workspace.clientArea(workspace.ScreenArea, client);
		// var ca = workspace.clientArea(workspace.MovementArea, client);
		// var ca = workspace.clientArea(workspace.WorkArea, client);

		if (geometry.x < ca.x) {
			moveLto(geometry, ca.x);
			pinRightInsteadLeft = false;
		}
		if (geometry.y < ca.y) {
			moveTto(geometry, ca.y);
			pinBottomInsteadTop = false;
		}
		if (geometry.x + geometry.width > ca.x + ca.width) {
			moveRto(geometry, ca.x + ca.width);
			pinRightInsteadLeft = true;
		}
		if (geometry.y + geometry.height > ca.y + ca.height) {
			moveBto(geometry, ca.y + ca.height);
			pinBottomInsteadTop = true;
		}

		// Not Work
		// var max = workspace.clientArea(workspace.MaximizeArea, client);
		// if (geometry.x < max.x) {
		// 	geometry.width = geometry.width + geometry.x - max.x;
		// 	geometry.x = max.x;
		// 	pinRightInsteadLeft = false;
		// }
		// if (geometry.y < max.y) {
		// 	geometry.height = geometry.height + geometry.y - max.y;
		// 	geometry.y = max.y;
		// 	pinBottomInsteadTop = false;
		// }
		// if (geometry.x + geometry.width > max.x + max.width) {
		// 	geometry.width = max.x + max.width - geometry.x;
		// 	pinRightInsteadLeft = true;
		// }
		// if (geometry.y + geometry.height > max.y + max.height) {
		// 	geometry.height = max.y + max.height - geometry.y;
		// 	pinBottomInsteadTop = true;
		// }
		applySizeConstraints();




		if (!shallowEquals(client.geometry, geometry)) client.geometry = geometry;
	}

	function shallowEquals(x, y) {
		if (Object.keys(x).length !== Object.keys(y).length) {
			return false;
		}
		for (var p in x) {
			if (x[p] !== y[p]) {
				return false;
			}
		}
		return true;
	}




	function clientMoved(client, rect) {
		// client.startGeometry = client.geometry;
		// print("CS: ", client.startGeometry.x, client.startGeometry.y);

		// print(client);
		// if (!client.move) return;
		// Find First
		var snapsss = findSnap(client, workspace.clientList());
		if (!snapsss) return;
		for (var i = 0; i < snapsss.length; ++i) {
			var snap = snapsss[i];

			// if (!snap.client.is_window_group) {
			// 	continue;
			// }
			// print(snap.client);

			var to = {
				x: snap.client.geometry.x,
				y: snap.client.geometry.y,
				width: snap.client.geometry.width,
				height: snap.client.geometry.height
			};

			// var dirx = 0;
			// var diry = 0;
			// print(client.prev_rect);
			// if (client.prev_rect) {
			// 	dirx = rect.x - client.prev_rect.x;
			// 	diry = rect.y - client.prev_rect.y;
			// 	print(dirx, diry);
			// }

			// to.x = snap.client.geometry.x + dirx;
			// to.y = snap.client.geometry.y + diry;

			// print("SN: ",to.x, to.y);

			if (snap.lr) {
				to.x = rect.x - to.width;
				to.y = rect.y + (to.y - client.startGeometry.y);
				// print("LR: ", to.x, to.y);
			}
			if (snap.rl) {
				to.x = rect.x + rect.width;
				to.y = rect.y + (to.y - client.startGeometry.y);
				// print("RL: ", to.x, to.y);
			}
			if (snap.tb) {
				to.x = rect.x + (to.x - client.startGeometry.x);
				to.y = rect.y - to.height;
				// print("TB: ", to.x, to.y);
			}
			if (snap.bt) {
				to.x = rect.x + (to.x - client.startGeometry.x);
				to.y = rect.y + rect.height;
				// print("BT: ", to.x, to.y);
			}

			if (snap.ll) {
				to.x = rect.x;
				to.y = rect.y + (to.y - client.startGeometry.y);
				// print("LL: ", to.x, to.y);
			}
			if (snap.rr) {
				to.x = rect.x;
				to.y = rect.y + (to.y - client.startGeometry.y);
				// print("RR: ", to.x, to.y);
			}
			if (snap.tt) {
				to.x = rect.x + (to.x - client.startGeometry.x);
				to.y = rect.y;
				// print("TT: ", to.x, to.y);
			}
			if (snap.bb) {
				to.x = rect.x + (to.x - client.startGeometry.x);
				to.y = rect.y;
				// print("BB: ", to.x, to.y);
			}

			snap.client.geometry = to;

			// if (!snap.lr && !snap.ll && !snap.rl && !snap.rr && !snap.tb && !snap.tt && !snap.bt && !snap.bb) {
			// }

			// if (snap.ll) {
			//     print("LL");
			//     to.x = rect.x;
			//     to.width = to.x + to.width - rect.x;
			// }
			// if (snap.rr) {
			//     print("RR");
			//     to.width = rect.x + rect.width - to.x;
			// }
			// if (snap.tt) {
			//     print("TT");
			//     to.y = rect.y;
			//     to.height = to.y + to.height - rect.y;
			// }
			// if (snap.bb) {
			//     print("BB");
			//     to.height = rect.y + rect.height - to.y;
			// }
		}
	}

	init();

})();