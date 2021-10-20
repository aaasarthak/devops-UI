sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("Devops.EmployeeMgmtSystem.controller.HomePage", {
		onInit: function () {
			sap.ui.core.UIComponent.getRouterFor(this).getRoute("detail").attachPatternMatched(this.onObjectMatched, this);
		},
		
		onObjectMatched: function(oEvent) {
			var that = this;
			var id = oEvent.getParameter("arguments").id;
			console.log(id);
			fetch("http://localhost:9001/departments/" + id + "/users").then(response => response.json()).then(function(data) {
				console.log(data);
				var model = new JSONModel(data);
				that.getView().setModel(model);
			}).catch(function(ex){
				console.log(ex);
			});
		}
	});
});