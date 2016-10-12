"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var DataService = (function () {
    function DataService(http) {
        var _this = this;
        this.http = http;
        this.username = "root";
        this.password = "braces11";
        this.httpHeaders = new http_1.Headers({ 'Authorization': 'Basic ' + btoa(this.username + ":" + this.password) });
        this.httpOptions = new http_1.RequestOptions({ headers: this.httpHeaders });
        this.dbase = "rpw";
        this.baseURL = "http://orientdb.duffeytech.com:2480/";
        this.orientDBPropertySchema = [
            { name: "name", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "type", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "globalId", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "mandatory", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "readonly", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "notNull", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "defaultValue", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "min", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "max", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "customFields", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "collate", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "description", type: "STRING", defaultValue: "", custom: { label: "Prefix", labelAbove: false, controlType: "input", css: { input: { width: "75px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
        ];
        this.orientDBPropertyForm = {
            submit: function (x) { console.log(x); },
            submitLabel: "Save",
            controls: [
                {
                    type: "fieldset",
                    name: "Class Group",
                    fields: [
                        { classField: this.orientDBPropertySchema[0] },
                        { classField: this.orientDBPropertySchema[1] },
                        { classField: this.orientDBPropertySchema[2] },
                        { classField: this.orientDBPropertySchema[3] },
                        { classField: this.orientDBPropertySchema[4] },
                        { classField: this.orientDBPropertySchema[5] }
                    ]
                }
            ]
        };
        this.orientDBPropertyObject = {
            fieldObject: this.orientDBPropertySchema,
            formObject: this.orientDBPropertyForm
        };
        this.orientDBClassSchema = [
            { name: "name", type: "STRING", defaultValue: "", custom: { label: "Name", labelAbove: false, controlType: "input", css: { input: { width: "198px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "shortName", type: "STRING", defaultValue: "", custom: { label: "Short Name", labelAbove: false, controlType: "input", css: { input: { width: "197px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "description", type: "STRING", defaultValue: "", custom: { label: "Description", labelAbove: false, controlType: "input", css: { input: { width: "400px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "defaultClusterId", type: "STRING", defaultValue: "", custom: { label: "Default Cluster ID", labelAbove: false, controlType: "input", css: { input: { width: "130px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "clusterIds", type: "STRING", defaultValue: "", custom: { label: "Cluster IDs", labelAbove: false, controlType: "input", css: { input: { width: "130px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "clusterSelection", type: "STRING", defaultValue: "", custom: { label: "Cluster Selection", labelAbove: false, controlType: "input", css: { input: { width: "130px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "superClass", type: "STRING", defaultValue: "", custom: { label: "Super Class", labelAbove: false, controlType: "input", css: { input: { width: "198px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "superClasses", type: "OBJECT", defaultValue: "", custom: { label: "Super Classes", labelAbove: false, controlType: "input", css: { input: { width: "197px" }, group: { display: "inline-block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "properties", type: "ARRAY", defaultValue: "", custom: { label: "Properties", labelAbove: false, formControls: this.orientDBPropertyObject, controlType: "input", css: { input: { width: "200px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "customFields", type: "STRING", defaultValue: "", custom: { label: "Custom Fields", labelAbove: false, controlType: "input", css: { input: { width: "200px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "overSize", type: "STRING", defaultValue: "", custom: { label: "Over Size", labelAbove: false, controlType: "input", css: { input: { width: "200px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "strictMode", type: "STRING", defaultValue: "", custom: { label: "Strict Mode", labelAbove: false, controlType: "input", css: { input: { width: "200px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } },
            { name: "abstract", type: "STRING", defaultValue: "", custom: { label: "Abstract", labelAbove: false, controlType: "input", css: { input: { width: "200px" }, group: { display: "block", "margin-right": "1px", "margin-bottom": "5px" } } } }
        ];
        this.getDocumentById = function (id) {
            var url = _this.baseURL + 'document/' + _this.dbase + '/' + id;
            return _this.http.get(url, _this.httpOptions).map(function (res) { return res.json(); });
        };
        this.queryDocumentsByClass = function (documentClass) {
            return _this.sqlQuery('SELECT * FROM ' + documentClass);
        };
        this.getCountByClass = function (documentClass) {
            return _this.sqlQuery('SELECT COUNT(*) FROM ' + documentClass);
        };
        this.sqlQuery = function (sqlStatement) {
            var url = _this.baseURL + 'query/' + _this.dbase + '/sql/' + sqlStatement;
            return _this.http.get(url, _this.httpOptions).map(function (res) { return res.json(); });
        };
        this.getAllClasses = function () {
            return _this.sqlQuery("select expand(classes) from metadata:schema").map(function (x) { return x.result; });
        };
        this.getClassSchema = function (documentClass) {
            var url = _this.baseURL + 'class/' + _this.dbase + '/' + documentClass;
            return _this.http.get(url, _this.httpOptions).map(function (res) { return res.json(); });
        };
        this.getClassProperties = function (documentClass) {
            return _this.getClassSchema(documentClass).map(function (x) { return x.properties; });
        };
        this.getClassPropertyNames = function (documentClass) {
            return _this.getClassSchema(documentClass).map(function (x) { return x.properties.map(function (x) { return x.name; }); });
        };
        this.addClassProperty = function (className, propertyName, propertyType) {
            propertyType = (typeof propertyType === 'undefined') ? 'STRING' : propertyType;
            var postDoc = {};
            postDoc[propertyName] = { 'propertyType': propertyType };
            var url = _this.baseURL + 'property/' + _this.dbase + '/' + className;
            return _this.http.post(url, postDoc, _this.httpOptions).map(function (res) { return res.json(); }).flatMap(function (res) { return _this.getClassSchema(className); });
        };
    }
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data-service.js.map