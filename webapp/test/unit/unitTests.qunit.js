/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"testo2dmsui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
