sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("Devops.EmployeeMgmtSystem.controller.HomePage", {
		onInit: function () {
			var oThis = this;
			oThis._router = oThis.getOwnerComponent().getRouter();
			// set mock model
			var sPath = sap.ui.require.toUrl("Devops/EmployeeMgmtSystem/model/data.json"),
				oModel = new JSONModel(sPath);

			this.getView().setModel(oModel);
		},

		handleTilePress: function (oEvent) {
			var oThis = this;
			if(oEvent.getSource().getProperty("title").toLowerCase().indexOf("employee") > -1){
				oThis._router.navTo("User", false);
			} else {
				oThis._router.navTo("Department", false);
			}
		}
	});
});