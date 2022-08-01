sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "./model/models",
    "./controller/ErrorHandler"
], function (UIComponent, Device, models, ErrorHandler) {
    "use strict";

    return UIComponent.extend("com.ntt.sm.userproject.Component", {

        metadata: {
            manifest: "json"
        },


        init: function () {

            UIComponent.prototype.init.apply(this, arguments);


            this._oErrorHandler = new ErrorHandler(this);


            this.setModel(models.createDeviceModel(), "device");


            this.getRouter().initialize();
        },


        destroy: function () {
            this._oErrorHandler.destroy();

            UIComponent.prototype.destroy.apply(this, arguments);
        },


        getContentDensityClass: function () {
            if (this._sContentDensityClass === undefined) {

                if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
                    this._sContentDensityClass = "";
                } else if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {

                    this._sContentDensityClass = "sapUiSizeCozy";
                }
            }
            return this._sContentDensityClass;
        }


    });

});