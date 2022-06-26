<template>
    <div
        class="flex items-center justify-center w-full h-32 rounded bg-fluffBlue-3"
    >
        <h1>
            {{ this.$props.title }}
        </h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped></style>
