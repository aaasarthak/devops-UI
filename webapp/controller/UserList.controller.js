sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("Devops.EmployeeMgmtSystem.controller.UserList", {
		onInit: function () {
			var oThis = this;
			oThis._router = oThis.getOwnerComponent().getRouter();
			sap.ui.core.UIComponent.getRouterFor(this).getRoute("User").attachPatternMatched(this.onObjectMatched, this);
		},
		
		onObjectMatched: function() {
			var that = this;
			fetch("http://localhost:9002/users/").then(response => response.json()).then(function(data) {
				var model = new JSONModel(data);
				that.getView().setModel(model);
			});
		},
 
	});
});