<script setup lang="ts">
import { MessageCircleMore } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const props = defineProps<{
  data: {
    title: string,
    text: string,
    img?: string,
    btn?: string,
    bg?: string, 
  }
}>()

</script>

<template>
  <Card :class="['h-full max-w-[450px]', props.data.bg ]">
    <CardHeader>
      <NuxtImg v-if="props.data.img" :src="props.data.img" class="rounded-md"/>
      <CardTitle class="mt-5">{{ props.data.title }}</CardTitle>
    </CardHeader>
    <CardContent class="grid gap-4 min-h-[100px]">
      <p>{{ props.data.text }}</p>
    </CardContent>
    <CardFooter>
     
    </CardFooter>
  </Card>
</template>