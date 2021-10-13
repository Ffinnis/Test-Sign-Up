<template>
    <div class="input-container">
        <label class="input-label" for="name">Имя</label>
        <input @input="checkNameInput" v-model="nameInput" placeholder="Введите Ваше имя" class="input" id="name" name="name" type="text">
        <span class="error" v-if="!isValid">
            Введено не корректное значение
        </span>
    </div>
</template>

<script>
    import {ref} from "vue";
    export default {
        name: "NameInput",
        setup() {
            const nameInput = ref('')
            const isValid = ref(false)

            const checkNameInput = () => {
                isValid.value = !/\d/.test(nameInput.value) && !/\W/.test(nameInput.value);
            }

            return{
                nameInput, checkNameInput, isValid
            }
        }
    }
</script>

<style scoped>

</style>