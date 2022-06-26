<template>
    <div>
        <Navbar />
        <div class="mx-auto max-w-screen-2xl" id="main-container">
            <PageHeader>
                <h1 class="text-xl">
                    Hello, <strong>{{ $store.getters.user.name }}</strong
                    >.
                </h1>
                <h2 class="text-fluffBlue-5">
                    In this page, you can edit your account information.
                </h2>

                <div class="w-full h-full">
                    <Form>
                        <h1 class="text-xl">Edit Account</h1>
                        <FormItem name="name">
                            <div class="flex flex-col">
                                <p class="flex text-zinc-400">Password</p>
                                <Input
                                    v-model:value="formState.name"
                                    type="text"
                                    placeholder="Name"
                                    size="large"
                                />
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </PageHeader>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

import { PageHeader, Form, FormItem, Input } from "ant-design-vue";
import Navbar from "@/components/Navbar/Navbar.vue";

export default {
    components: {
        Navbar,
        PageHeader,
        Form,
        FormItem,
        Input,
    },
    setup() {
        const formState = reactive({
            name: "",
        });

        return {
            formState,
        };
    },
};
</script>

<style lang="scss" scoped></style>
