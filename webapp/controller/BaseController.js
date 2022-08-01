sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/library"
], function (Controller, UIComponent, mobileLibrary) {
    "use strict";


    var URLHelper = mobileLibrary.URLHelper;

    return Controller.extend("com.ntt.sm.userproject.controller.BaseController", {

        getRouter: function () {
            return UIComponent.getRouterFor(this);
        },


        getModel: function (sName) {
            return this.getView().getModel(sName);
        },


        setModel: function (oModel, sName) {
            return this.getView().setModel(oModel, sName);
        },


        getResourceBundle: function () {
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },




        onACDialog: function () {
            this.oDialog.close();
            this.oDialog.destroy();
            this.oDialog = null;
        },

        onDelete: function (sSet, oModel) {
            return new Promise(function (fnSuccess, fnReject) {
                const mParameters = {
                    success: fnSuccess,
                    error: fnReject
                };
                oModel.remove(sSet, mParameters);
            });
        },

        onUpdate: function (sSet, oData, oModel) {
            return new Promise(function (fnSuccess, fnReject) {
                const mParameters = {
                    success: fnSuccess,
                    error: fnReject
                };
                oModel.update(sSet, oData, mParameters);
            });
        },

        onCreate: function (sSet, oData, oModel) {
            return new Promise(function (fnSuccess, fnReject) {
                const mParameters = {
                    success: fnSuccess,
                    error: fnReject
                };
                oModel.create(sSet, oData, mParameters);
            });
        }
    });


});