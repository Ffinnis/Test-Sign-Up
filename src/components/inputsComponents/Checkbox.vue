<template>
    <div class="input-container">
        <input required id="rule-use" name="rule-use" type="checkbox" hidden>
        <label @click="setAgree" :class="isAgree ? 'active' : ''" for="rule-use">Принимаю <a href="#">условия</a> использования</label>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "Checkbox",
        setup() {
            const isAgree = ref(false)

            const setAgree = () => {
                isAgree.value = !isAgree.value
            }

            return {
                isAgree, setAgree
            }
        }
    }
</script>

<style scoped>
    label a{
        color: #0880AE;
    }
    label{
        position: relative;
        padding: 0 0 0 36px;
        cursor: pointer;
    }
    label::before{
        content: '';
        position: absolute;
        background: #FFFFFF;
        border: 1px solid #DBE2EA;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
        border-radius: 4px;
        width: 28px;
        height: 28px;
        left: 0;
        top: -5px;
    }

    label::after{
        display: none;
        content: '';
        left: 10px;
        top: 0;
        width: 6px;
        height: 14px;
        border: solid #0880AE;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        position: absolute;
    }
    label.active::after{
        display: block;
    }
</style>