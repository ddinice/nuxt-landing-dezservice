<template>
  <form @submit="onSubmit" @input="onChange" class="flex flex-col gap-6">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel class="text-white text-2xl sm:text-base">Ваше імʼя</FormLabel>
        <FormControl>
          <Input
            class="text-black bg-white h-[3rem] text-2xl"
            type="text"
            placeholder="Імʼя"
            v-bind="componentField" 
          />
        </FormControl>
        <Transition>
          <FormMessage />
        </Transition>
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel class="text-white text-2xl sm:text-base">Номер телефону</FormLabel>
        <FormControl>
          <Input class="text-black bg-white h-[3rem] text-2xl" type="text" placeholder="098 765 43 21" v-bind="componentField" />
        </FormControl>
        <Transition>
          <FormMessage />
        </Transition>
      </FormItem>
    </FormField>
    <Button
      type="submit"
      :disabled="loading"
      :class="[
        'rounded-0 mt-4 h-[3rem] flex items-center justify-center gap-2 transition-colors',
        loading ? 'bg-black' : 'bg-yellow-900'
      ]"
    >
      <Loader2 v-if="loading" class="w-4 h-4 animate-spin" />
      <span>{{ loading ? 'Надсилання...' : 'Надіслати' }}</span>
    </Button>

    <p v-if="data?.message" class="mt-2 text-yellow-900">
      {{ data.message }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input';

import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { configure } from 'vee-validate';
import { Loader2 } from "lucide-vue-next"
import { useSendForm } from '@/composable/useForm';

const { data, loading, error, send } = useSendForm();

const formSchema = toTypedSchema(z.object({
  name: z.string({ message: "Це поле обов’язкове"})
    .min(2, {message: "Мінімум 2 символа"})
    .max(50),
  phone: z.string({ message: "Це поле обов’язкове"})
    .min(9, {message: "Мінімум 9 символа"})
    .max(14, {message: "Мінімум 14 символа"})
    .trim()
}))

const { handleSubmit, errors } = useForm({
  validationSchema: formSchema,
  
})

configure({
  validateOnModelUpdate: false,
});

const onSubmit = handleSubmit(values => {
  send(values);
})

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  height: 24px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  height: 0;
}
</style>