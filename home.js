import { ref } from "vue";

function setup() {
  const chats = ref([1, 2]);
  const selectedChat = ref(null);

  function addChat() {
    chats.value.push(chats.value.length + 1);
  }

  return { chats, selectedChat, addChat };
}

export default {
  template: /* html */ `
    <button @click="addChat">Add a chat</button>
    <ul>
        <li v-for="chatId in chats" :key="chatId">
            Chat #{{ chatId }}
        </li>
    </ul>
  `,
  setup,
};
