import { ref } from 'vue';

type Payload = {
  name: string,
  phone: string
}

type Res = {
  message: string
}

export function useSendForm() {
  const data = ref<Res | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const url = 'api/send-mail';

  const send = async (payload: Payload) => {
    try {
      loading.value = true;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err))
    } catch (e) {
      console.warn('Can not send message.', e);
    } finally {
      loading.value = false;
    }
  }

  return {
    data,
    loading,
    error,
    send,
  }
}