sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("com.ntt.sm.userproject.controller.NotFound", {


        onLinkPressed: function () {
            this.getRouter().navTo("worklist");
        }

    });

});