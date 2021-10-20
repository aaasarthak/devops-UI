sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("Devops.EmployeeMgmtSystem.controller.DepartmentList", {
			onInit : function () {
				var oThis = this;
			oThis._router = oThis.getOwnerComponent().getRouter();
		}
	});
});