import {Injectable}											from '@angular/core';
import {Http, Headers, RequestOptions}	from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataService {
	username = "root";
	password = "braces11";
	httpHeaders = new Headers({'Authorization': 'Basic ' + btoa(this.username+":"+this.password)});
  httpOptions = new RequestOptions({headers: this.httpHeaders});
	dbase = "rpw";
	baseURL = "http://orientdb.duffeytech.com:2480/";
	orientDBPropertySchema = [
		{name: "name", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "type", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "globalId", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "mandatory", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "readonly", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "notNull", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "defaultValue", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "min", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "max", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "customFields", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "collate", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "description", type: "STRING", defaultValue: "", custom: {label: "Prefix", labelAbove: false, controlType: "input", css: {input: {width: "75px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
	];
	orientDBPropertyForm = {
		submit:     	function(x){console.log(x)},
		submitLabel:	"Save",
		controls:   	[
			{
				type: "fieldset",
				name: "Class Group",
				fields: [
					{classField: this.orientDBPropertySchema[0]},
					{classField: this.orientDBPropertySchema[1]},
					{classField: this.orientDBPropertySchema[2]},
					{classField: this.orientDBPropertySchema[3]},
					{classField: this.orientDBPropertySchema[4]},
					{classField: this.orientDBPropertySchema[5]}
				]
			}
		]
	};
	orientDBPropertyObject = {
		fieldObject:		this.orientDBPropertySchema,
		formObject:			this.orientDBPropertyForm
	};
	orientDBClassSchema = [
		{name: "name", type: "STRING", defaultValue: "", custom: {label: "Name", labelAbove: false, controlType: "input", css: {input: {width: "198px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "shortName", type: "STRING", defaultValue: "", custom: {label: "Short Name", labelAbove: false, controlType: "input", css: {input: {width: "197px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "description", type: "STRING", defaultValue: "", custom: {label: "Description", labelAbove: false, controlType: "input", css: {input: {width: "400px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "defaultClusterId", type: "STRING", defaultValue: "", custom: {label: "Default Cluster ID", labelAbove: false, controlType: "input", css: {input: {width: "130px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "clusterIds", type: "STRING", defaultValue: "", custom: {label: "Cluster IDs", labelAbove: false, controlType: "input", css: {input: {width: "130px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "clusterSelection", type: "STRING", defaultValue: "", custom: {label: "Cluster Selection", labelAbove: false, controlType: "input", css: {input: {width: "130px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "superClass", type: "STRING", defaultValue: "", custom: {label: "Super Class", labelAbove: false, controlType: "input", css: {input: {width: "198px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "superClasses", type: "OBJECT", defaultValue: "", custom: {label: "Super Classes", labelAbove: false, controlType: "input", css: {input: {width: "197px"}, group: {display: "inline-block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "properties", type: "ARRAY", defaultValue: "", custom: {label: "Properties", labelAbove: false, formControls: this.orientDBPropertyObject, controlType: "input", css: {input: {width: "200px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "customFields", type: "STRING", defaultValue: "", custom: {label: "Custom Fields", labelAbove: false, controlType: "input", css: {input: {width: "200px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "overSize", type: "STRING", defaultValue: "", custom: {label: "Over Size", labelAbove: false, controlType: "input", css: {input: {width: "200px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "strictMode", type: "STRING", defaultValue: "", custom: {label: "Strict Mode", labelAbove: false, controlType: "input", css: {input: {width: "200px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}},
		{name: "abstract", type: "STRING", defaultValue: "", custom: {label: "Abstract", labelAbove: false, controlType: "input", css: {input: {width: "200px"}, group: {display: "block", "margin-right": "1px", "margin-bottom": "5px"}}}}
	];

	constructor(private http: Http) {}
	getDocumentById = (id) => {
		let url = this.baseURL + 'document/' + this.dbase + '/' + id;
		return this.http.get(url, this.httpOptions).map(res => res.json());
	}
	queryDocumentsByClass = (documentClass) => {
		return this.sqlQuery('SELECT * FROM ' + documentClass);
	}
	getCountByClass = (documentClass) => {
		return this.sqlQuery('SELECT COUNT(*) FROM ' + documentClass);
	}
	sqlQuery = (sqlStatement) => {
		let url = this.baseURL + 'query/' + this.dbase + '/sql/' + sqlStatement;
		return this.http.get(url, this.httpOptions).map(res => res.json());
	}
	getAllClasses = () => {
		return this.sqlQuery("select expand(classes) from metadata:schema").map(x => {return x.result;});
	}
	getClassSchema = (documentClass) => {
		let url = this.baseURL + 'class/' + this.dbase + '/' + documentClass;
		return this.http.get(url, this.httpOptions).map(res => res.json());
	}
	getClassProperties = (documentClass) => {
		return this.getClassSchema(documentClass).map(x => {return x.properties;});
	}
	getClassPropertyNames = (documentClass) => {
		return this.getClassSchema(documentClass).map(x => {return x.properties.map(x => {return x.name;})});
	}
	addClassProperty = (className, propertyName, propertyType) => {
		propertyType = (typeof propertyType === 'undefined') ? 'STRING' : propertyType;
		let postDoc = {};
		postDoc[propertyName] = {'propertyType': propertyType};
		let url = this.baseURL + 'property/' + this.dbase + '/' + className;
		return this.http.post(url, postDoc, this.httpOptions).map(res => res.json()).flatMap((res) => this.getClassSchema(className));
	}
}