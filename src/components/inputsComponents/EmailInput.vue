<template>
    <div class="input-container">
        <label class="input-label" for="email">Email</label>
        <input @input="checkMailInput" v-model="mailInput" placeholder="Введите ваш email" class="input" id="email" name="email" type="email">
        <span v-if="!isValid" class="error">
            Введено не корректное значение
        </span>
    </div>
</template>

<script>
    import {ref, computed} from "vue";
    import * as EmailValidator from 'email-validator';
    import {useStore} from "vuex";
    export default {
        name: "EmailInput",
        setup() {
            const store = useStore()
            const mailInput = ref('')
            const isValid = computed(() => store.state.isMailValid)

            const checkMailInput = () => {
                EmailValidator.validate(mailInput.value) ? store.dispatch('setMailValid', true) : store.dispatch('setMailValid', false)
                console.log(isValid)
            }

            return {
                mailInput, checkMailInput, isValid
            }
        },
    }
</script>

<style scoped>

</style>