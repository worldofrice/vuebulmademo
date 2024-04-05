<script setup>
import { ref } from 'vue';
import MessageComponent from '../components/MessageComponent.vue';
let messages = ref([
    {
        title: "Primary Message",
        message: "Message with color 'primary'.",
        color: "primary",
    },
    {
        title: "Dark Message",
        message: "Message with color 'dark'.",
        color: "dark",
    },
    {
        title: "Info Message",
        message: "Message with color 'info'.",
        color: "info",
    },
    {
        title: "Success Message",
        message: "Message with color 'success'.",
        color: "success",
    },
    {
        title: "Warning Message",
        message: "Message with color 'warning'.",
        color: "warning",
    }
])
</script>

<template>
    <div>
        <MessageComponent v-for="(item, index) in messages" :title="item.title" :message="item.message"
            :color="item.color" />
    </div>
</template>