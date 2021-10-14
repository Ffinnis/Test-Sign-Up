<template>
    <div class="input-container">
        <label class="input-label" for="language">Язык</label>
        <input id="language" name="language" type="text" :value="selectedOption || ''" hidden>
        <div class="select-input">
            <div class="input">
                <div class="input-wrapper">
                    <div class="selected-option">
                        {{selectedOption || 'Язык'}}
                    </div>
                    <img @click="setSelectOptionsVisible"
                         class="dropdown-arrow"
                         :class="isSelectOptionsVisible ? '--active' : ''"
                         src="../../assets/images/dropdown-arrow.svg" alt="">
                </div>
                <div
                        class="select-input__options-list"
                        :class="isSelectOptionsVisible ? '--active' : ''"
                >
                    <div @click="setSelectedOption(option)" v-for="option in options" class="select-input-option">
                        {{option}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ref} from "vue";
    import {useStore} from "vuex";

    export default {
        name: "LanguageSelect",
        props: {
            options: Array
        },
        setup() {
            const isSelectOptionsVisible = ref(false)
            const selectedOption = ref(null)
            const store = useStore()

            const setSelectedOption = (el) => {
                selectedOption.value = el
                store.dispatch('setLanguageValid', true)
            }

            const setSelectOptionsVisible = () => {
                 isSelectOptionsVisible.value = !isSelectOptionsVisible.value
            }


            return {
                isSelectOptionsVisible, setSelectOptionsVisible, selectedOption, setSelectedOption
            }
        }
    }
</script>

<style scoped>
    .select-input__options-list{
        position: absolute;
        background: #FFFFFF;
        border: 1px solid #DBE2EA;
        box-shadow: 0 4px 8px rgba(44, 39, 56, 0.04), 0 20px 20px rgba(44, 39, 56, 0.04);
        border-radius: 6px;
        padding: 6px 0;
        left: 0;
        top: 63px;
        display: flex;
        flex-direction: column;
        opacity: 0;
        visibility: hidden;
        z-index: 2;
        width: 360px;
    }
    .select-input{
        width: 360px;
    }
    @media (max-width: 890px) {
        .select-input__options-list{
            width: 320px;
        }
        .select-input{
            max-width: 320px;
        }
    }
    .select-input__options-list.--active{
        visibility: visible;
        animation: showDropdown;
        animation-duration: 0.3s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: forwards;
    }
    .select-input-option{
        padding: 12px 15px;
        transition: 0.3s ease-in;
        cursor: pointer;
    }
    .input-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .dropdown-arrow{
        cursor: pointer;
        transition: 0.25s ease-in;
    }
    .dropdown-arrow.--active{
        transform: rotate(180deg);
    }
    .input{
        position: relative;
        width: 100%;
    }
    .select-input-option:hover{
        background: #EBF4F8;
    }
    @keyframes showDropdown  {
        from{
            transform: translateY(-43px);
            opacity: 0;
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>