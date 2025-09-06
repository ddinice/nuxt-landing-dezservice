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
    link?: {
      title: string,
      url: string
    }
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
      <p class="whitespace-pre-line">{{ props.data.text }}</p>
    </CardContent>
    <CardFooter>
     <div v-if="props.data?.link?.url">
      <a :href="props.data?.link?.url">
        <Button>{{ props.data?.link?.title }}</Button>
      </a>
     </div>
    </CardFooter>
  </Card>
</template>