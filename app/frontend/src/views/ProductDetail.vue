<template>
    <div>
        <h1>This is Product Detail page</h1>
        <h2>Product ID = {{ id }}</h2>
    </div>
</template>

<script>
export default {
    name: "ProductDetail",
    props: {
        id,
    },
};
</script>
