"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Edit=exports.DEFAULT_SHIPPING_CLASS_OPTIONS=void 0;const components_1=require("@woocommerce/components"),data_1=require("@woocommerce/data"),navigation_1=require("@woocommerce/navigation"),tracks_1=require("@woocommerce/tracks"),block_editor_1=require("@wordpress/block-editor"),components_2=require("@wordpress/components"),compose_1=require("@wordpress/compose"),data_2=require("@wordpress/data"),element_1=require("@wordpress/element"),i18n_1=require("@wordpress/i18n"),core_data_1=require("@wordpress/core-data"),components_3=require("../../components"),constants_1=require("../../constants");function mapShippingClassToSelectOption(e){return e.map((({slug:e,name:t})=>({value:e,label:t})))}function extractDefaultShippingClassFromProduct(e,t){const s=null==e?void 0:e.find((({slug:e})=>"uncategorized"!==e));if(s&&!(null==t?void 0:t.some((({slug:e})=>e===s.slug))))return{name:s.name,slug:s.slug}}function Edit({}){const[e,t]=(0,element_1.useState)(!1),s=(0,block_editor_1.useBlockProps)(),{createProductShippingClass:o,invalidateResolution:n}=(0,data_2.useDispatch)(data_1.EXPERIMENTAL_PRODUCT_SHIPPING_CLASSES_STORE_NAME),{createErrorNotice:a}=(0,data_2.useDispatch)("core/notices"),[i]=(0,core_data_1.useEntityProp)("postType","product","categories"),[c,r]=(0,core_data_1.useEntityProp)("postType","product","shipping_class");function l(e){let t=(0,i18n_1.__)("We couldn’t add this shipping class. Try again in a few seconds.","woocommerce");throw"term_exists"===e.code&&(t=(0,i18n_1.__)("A shipping class with that slug already exists.","woocommerce")),a(t,{explicitDismiss:!0}),e}const{shippingClasses:_}=(0,data_2.useSelect)((e=>{var t;const{getProductShippingClasses:s}=e(data_1.EXPERIMENTAL_PRODUCT_SHIPPING_CLASSES_STORE_NAME);return{shippingClasses:null!==(t=s())&&void 0!==t?t:[]}}),[]),p=(0,compose_1.useInstanceId)(components_2.BaseControl,"wp-block-woocommerce-product-shipping-class-field");return(0,element_1.createElement)("div",{...s},(0,element_1.createElement)("div",{className:"wp-block-columns"},(0,element_1.createElement)("div",{className:"wp-block-column"},(0,element_1.createElement)(components_2.SelectControl,{id:p,name:"shipping_class",value:c,onChange:e=>{e!==constants_1.ADD_NEW_SHIPPING_CLASS_OPTION_VALUE?r(e):t(!0)},label:(0,i18n_1.__)("Shipping class","woocommerce"),options:[...exports.DEFAULT_SHIPPING_CLASS_OPTIONS,...mapShippingClassToSelectOption(null!=_?_:[])],help:(0,element_1.createInterpolateElement)((0,i18n_1.__)("Manage shipping classes and rates in <Link>global settings</Link>.","woocommerce"),{Link:(0,element_1.createElement)(components_1.Link,{href:(0,navigation_1.getNewPath)({tab:"shipping",section:"classes"},"",{},"wc-settings"),target:"_blank",type:"external",onClick:()=>{(0,tracks_1.recordEvent)("product_shipping_global_settings_link_click")}},(0,element_1.createElement)(element_1.Fragment,null))})})),(0,element_1.createElement)("div",{className:"wp-block-column"})),e&&(0,element_1.createElement)(components_3.AddNewShippingClassModal,{shippingClass:extractDefaultShippingClassFromProduct(i,_),onAdd:e=>o(e).then((e=>((0,tracks_1.recordEvent)("product_new_shipping_class_modal_add_button_click"),n("getProductShippingClasses"),r(e.slug),e))).catch(l),onCancel:()=>t(!1)}))}exports.DEFAULT_SHIPPING_CLASS_OPTIONS=[{value:"",label:(0,i18n_1.__)("No shipping class","woocommerce")},{value:constants_1.ADD_NEW_SHIPPING_CLASS_OPTION_VALUE,label:(0,i18n_1.__)("Add new shipping class","woocommerce")}],exports.Edit=Edit;