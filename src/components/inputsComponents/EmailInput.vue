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
    import {ref} from "vue";
    import * as EmailValidator from 'email-validator';

    export default {
        name: "EmailInput",
        setup() {
            const mailInput = ref('')
            const isValid = ref(false)

            const checkMailInput = () => {
                EmailValidator.validate(mailInput.value) ? isValid.value = true : isValid.value = false
                console.log(isValid.value)
            }

            return {
                mailInput, checkMailInput, isValid
            }
        }
    }
</script>

<style scoped>

</style>