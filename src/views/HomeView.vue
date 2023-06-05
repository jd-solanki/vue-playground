<script setup lang="ts">
const icon = ref('i-bx-user')

setTimeout(() => {
  icon.value = 'i-bx-lock'
}, 2000)
</script>

<template>
  <main>
    <ACard>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae fugiat numquam debitis, aspernatur delectus?</p>
      <ABtn :icon="icon">
        Button
      </ABtn>
      <AAlert>
        This is alert!
      </AAlert>
    </ACard>
  </main>
</template>
