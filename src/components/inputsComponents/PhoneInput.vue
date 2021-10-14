<template>
    <div class="input-container">
        <label class="input-label" for="tel">Номер телефона</label>
        <input @input="checkTelInput" v-model="telInput" placeholder="Введите номер телефона" class="input" id="tel" name="tel" type="tel">
        <span class="error" v-if="!isValid">
            Введено не корректное значение
        </span>
    </div>
</template>

<script>
    import {ref} from "vue";
    import {useStore} from "vuex";
    import {computed} from "@vue/reactivity";
    export default {
        name: "PhoneInput",
        setup() {
            const store = useStore()
            const isValid = computed(() => store.state.isTelValid)
            const telInput = ref('')

            const checkTelInput = () => {
                /[\d\-\)\(\+ ]+/.test(telInput.value) && telInput.value.replace(/[\-\)\(\+ ]+/, '').length === 11 ?
                    store.dispatch('setTelValid', true) :
                    store.dispatch('setTelValid', false)

            }
            return {
                isValid, telInput, checkTelInput
            }
        }
    }
</script>

<style scoped>

</style>