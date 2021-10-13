<template>
    <form id="sign-up__form" class="form">
        <h3 class="form-title">
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
    </form>
</template>

<script>
    import EmailInput from "./inputsComponents/EmailInput.vue";
    import NameInput from "./inputsComponents/NameInput.vue";
    import PhoneInput from "./inputsComponents/PhoneInput.vue";
    import LanguageSelect from "./inputsComponents/LanguageSelect.vue";
    export default {
        name: "TheSignUp",
        setup() {
            const optionsList = ['Русский', 'Английский', 'Китайский', 'Испанский']

            return {
                optionsList
            }
        },
        components: {LanguageSelect, PhoneInput, NameInput, EmailInput}
    }
</script>

<style>

</style>