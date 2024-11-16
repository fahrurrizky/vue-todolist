/* __placeholder__ */

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');

const __VLS_componentsOption = {};

let __VLS_name!: 'WelcomeItem';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {}
 & { 'item'?: boolean }
 & { 'details'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean }
 & { 'item'?: boolean };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {}
;
__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;__VLS_intrinsicElements.div;
__VLS_intrinsicElements.i;__VLS_intrinsicElements.i;
__VLS_intrinsicElements.h3;__VLS_intrinsicElements.h3;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{ }, class: ("item"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{ }, class: ("item"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["i"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = ({} as 'Slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.Slot }: 'slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.slot }: typeof __VLS_resolvedLocalAndGlobalComponents).slot;
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({...{ }, }));
const __VLS_12 = __VLS_11({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{ }, });
var __VLS_13 = {
};
}
(__VLS_8.slots!).default;
}
{
const __VLS_14 = __VLS_intrinsicElements["div"];
const __VLS_15 = __VLS_elementAsFunctionalComponent(__VLS_14);
const __VLS_16 = __VLS_15({ ...{ }, class: ("details"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_14, typeof __VLS_16> & Record<string, unknown>) => void)({ ...{ }, class: ("details"), });
const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16)!;
let __VLS_18!: __VLS_NormalizeEmits<typeof __VLS_17.emit>;
{
const __VLS_19 = __VLS_intrinsicElements["h3"];
const __VLS_20 = __VLS_elementAsFunctionalComponent(__VLS_19);
const __VLS_21 = __VLS_20({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_20));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_19, typeof __VLS_21> & Record<string, unknown>) => void)({ ...{ }, });
const __VLS_22 = __VLS_pickFunctionalComponentCtx(__VLS_19, __VLS_21)!;
let __VLS_23!: __VLS_NormalizeEmits<typeof __VLS_22.emit>;
{
const __VLS_24 = ({} as 'Slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.Slot }: 'slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.slot }: typeof __VLS_resolvedLocalAndGlobalComponents).slot;
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({...{ }, }));
const __VLS_26 = __VLS_25({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_24, typeof __VLS_26> & Record<string, unknown>) => void)({ ...{ }, });
var __VLS_27 = {
};
}
(__VLS_22.slots!).default;
}
{
const __VLS_28 = ({} as 'Slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.Slot }: 'slot' extends keyof typeof __VLS_ctx ? { 'slot': typeof __VLS_ctx.slot }: typeof __VLS_resolvedLocalAndGlobalComponents).slot;
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({...{ }, }));
const __VLS_30 = __VLS_29({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_28, typeof __VLS_30> & Record<string, unknown>) => void)({ ...{ }, });
var __VLS_31 = {
};
}
(__VLS_17.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["item"];
__VLS_styleScopedClasses["details"];
}
var __VLS_slots!:{
icon?(_: typeof __VLS_13): any,
heading?(_: typeof __VLS_27): any,
default?(_: typeof __VLS_31): any,
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});
const __VLS_component = (await import('vue')).defineComponent({
setup() {
return {
};
},
});
export default {} as __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
type __VLS_WithTemplateSlots<T, S> = T & { new(): {
$slots: S;
} };
