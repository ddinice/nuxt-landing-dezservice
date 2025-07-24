<template>
  <form @submit="onSubmit" class="flex flex-col gap-6">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel class="text-white">Ваше імʼя</FormLabel>
        <FormControl>
          <Input class="text-black bg-white h-[3rem] text-2xl" type="text" placeholder="Імʼя" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel class="text-white">Номер телефону</FormLabel>
        <FormControl>
          <Input class="text-black bg-white h-[3rem] text-2xl" type="number" placeholder="098 765 43 21" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="rounded-0 mt-4 bg-yellow-900 h-[3rem]">
      Надіслати
    </Button>
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


const formSchema = toTypedSchema(z.object({
  name: z.string().min(2).max(50),
  phone: z.string().regex(/^\+380\d{9}$/, 'Невірний формат телефону'),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
})

</script>