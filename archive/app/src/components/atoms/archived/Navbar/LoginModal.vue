<template>
    <Modal
        :visible="visibleModal"
        title="Login"
        cancel-text=" "
        ok-text=" "
        :closable="true"
    >
        <div class="main" v-if="!openRegister">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto">
                    <router-link to="/">
                        <div class="flex justify-center pb-16">
                            <Logo color="rgb(30,16,52)" />
                        </div>
                    </router-link>

                    <p class="max-w-xl mx-auto mt-4 text-center text-gray-500">
                        To make sure you have the most up to date product
                        catalog and service quality, please login to your
                        account or
                        <span class="text-red-500"
                            >sign up for a new account</span
                        >.
                    </p>

                    <Form :model="formState" :name="'login'" autocomplete="off">
                        <FormItem
                            name="email"
                            :rules="[
                                {
                                    required: true,
                                    message: 'Please input your email',
                                },
                            ]"
                        >
                            <p class="flex text-zinc-400">Email</p>
                            <Input
                                v-model:value="formState.email"
                                type="email"
                                placeholder="Email"
                                size="large"
                            />
                        </FormItem>
                        <FormItem
                            name="password"
                            :rules="[
                                {
                                    required: true,
                                    message: 'Please input your password',
                                },
                            ]"
                        >
                            <p class="flex text-zinc-400">Password</p>
                            <InputPassword
                                v-model:value="formState.password"
                                placeholder="Password"
                                size="large"
                            />
                        </FormItem>
                        <p @click="toggleRegister">
                            Or register a new account!
                        </p>
                        <FormItem>
                            <Button
                                type="primary"
                                size="large"
                                block
                                @click="handleSubmit"
                            >
                                Login
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
        <div v-else>Register</div>
    </Modal>
</template>

<script>
import { reactive } from "vue";
import Logo from "@/components/atoms/Logo/Logo.vue";
import {
    Button,
    Form,
    FormItem,
    Input,
    InputPassword,
    Modal,
} from "ant-design-vue";
import store from "@/store/";

export default {
    name: "LoginModal",
    components: {
        Logo,
        Button,
        Form,
        FormItem,
        Input,
        InputPassword,
        Modal,
    },
    props: {
        visibleModal: false,
    },
    setup() {
        const formState = reactive({
            username: "",
            password: "",
            remember: true,
        });

        return {
            formState,
        };
    },
    data() {
        return {
            store,
            openRegister: false,
        };
    },
    methods: {
        handleSubmit() {
            this.store.dispatch("login", this.formState);
        },
        handleOk(e) {
            this.$props.visibleModal = false;
        },
        handleCancel(e) {
            this.$props.visibleModal = false;
        },
        toggleRegister() {
            this.openRegister = !this.openRegister;
        },
    },
};
</script>
