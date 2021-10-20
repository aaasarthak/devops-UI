sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("Devops.EmployeeMgmtSystem.controller.HomePage", {
			onInit : function () {
			console.log("welcome to detail page!");
		},
	});
});