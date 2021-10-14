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
    import {ref, computed} from "vue";
    import {useStore} from "vuex";
    export default {
        name: "NameInput",
        setup() {
            const store = useStore()
            const nameInput = ref('')
            const isValid = computed(() => store.state.isNameValid)

            const checkNameInput = () => {
                !/\d/.test(nameInput.value) && !/[\d\-\)\(\+]+/.test(nameInput.value) ?
                    store.dispatch('setNameValid', true) :
                    store.dispatch('setNameValid', false)
            }

            return{
                nameInput, checkNameInput, isValid
            }
        }
    }
</script>

<style scoped>

</style>