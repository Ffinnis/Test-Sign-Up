<template>
    <form id="sign-up__form" class="form">
        <h3 @click="log" class="form-title">
            Регистрация
        </h3>
        <div class="registered">
            <p>Уже есть аккаунт?</p>
            <a class="registered-link" href="#">Войти</a>
        </div>
        <div class="inputs-wrapper">
            <NameInput />
            <EmailInput />
            <PhoneInput />
            <LanguageSelect :options="optionsList"/>
        </div>
        <Checkbox />
        <button :disabled="!validation" class="sign-up__button" type="submit">
            Зарегистрироваться
        </button>
    </form>
</template>

<script>
    import EmailInput from "./inputsComponents/EmailInput.vue";
    import NameInput from "./inputsComponents/NameInput.vue";
    import PhoneInput from "./inputsComponents/PhoneInput.vue";
    import LanguageSelect from "./inputsComponents/LanguageSelect.vue";
    import Checkbox from "./inputsComponents/Checkbox.vue";
    import {ref, computed} from "vue";
    import {useStore} from "vuex";

    export default {
        name: "TheSignUp",
        setup() {
            const optionsList = ['Русский', 'Английский', 'Китайский', 'Испанский']
            const store = useStore()

            const validation = computed(() => store.state.isMailValid && store.state.isNameValid && store.state.isTelValid && store.state.isLanguageValid)

            return {
                optionsList, validation
            }
        },
        components: {Checkbox, LanguageSelect, PhoneInput, NameInput, EmailInput}
    }
</script>

<style>
    .sign-up__button{
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 6px;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        padding: 18px 121px;
        border: none;
        background: #0880AE;
        color: #EBF4F8;
        cursor: pointer;
    }
    .sign-up__button:disabled{
        background: #DBE2EA;
        color: #B1B5BF;
        cursor: default;
    }
    @media (max-width: 540px) {
        .sign-up__button{
            padding: 16px 16px;
        }
    }
</style>