<template>
    <div>
        <h1>{{ state }}</h1>
        <h3>Seat {{ code }}</h3>
    </div>
</template>
<script>
export default {
    props: ["state", "code"]
}
</script>