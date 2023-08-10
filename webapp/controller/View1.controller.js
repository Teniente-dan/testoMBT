sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testo2dmsui.controller.View1", {
            onInit: function () {

            },
            onBeforeRendering: function (){
                this.getView().getModel().read('/nroSolicitudSet',{
                    success: function(odata) {
                        this.byId('page').setTitle(odata?.results?.length)
                    }.bind(this)
                })
            }
        });
    });
