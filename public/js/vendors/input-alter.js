"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[994],{2226:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var a=l(8253),n=["value"],o={class:"floating-label"},i={key:0,class:"invalid-feedback"},d={key:1,class:"invalid-feedback"};const m={props:["modelValue","v$","modelName","title","special"],methods:{updateValue:function(e){this.$emit("update:modelValue",e.target.value)}},computed:{getModelName:function(){return this.special?this.v$.m.json[this.modelName]:this.v$.m[this.modelName]}}};const r=(0,l(3744).Z)(m,[["render",function(e,t,l,m,r,u){return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createElementVNode)("input",(0,a.mergeProps)({class:["floating-input form-control",{"is-invalid":u.getModelName.$errors.length}]},e.$attrs,{type:"text",value:l.modelValue,onInput:t[0]||(t[0]=function(){return u.updateValue&&u.updateValue.apply(u,arguments)})}),null,16,n),(0,a.createElementVNode)("label",o,(0,a.toDisplayString)(l.title),1),u.getModelName.maxLength&&u.getModelName.maxLength.$invalid?((0,a.openBlock)(),(0,a.createElementBlock)("div",i,"დატოვეთ ცარიელი!")):(0,a.createCommentVNode)("",!0),u.getModelName.required&&u.getModelName.required.$invalid?((0,a.openBlock)(),(0,a.createElementBlock)("div",d,"ჩაწერეთ!")):(0,a.createCommentVNode)("",!0)],64)}]])}}]);
//# sourceMappingURL=input-alter.js.map