<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <img src="@/assets/icons/LOGO.svg" alt="logo" />
    <p class="text-secondary text-sm">Streamline Your Events with Eventurs</p>

    <div
      class="bg-cardBg rounded-2xl w-11/12 md:w-[800px] p-6 sm:p-[60px] space-y-5 mt-8 sm:mt-11 shadow-md shadow-gray-400"
    >
      <div class="">
        <h3 class="text-blackText font-medium text-lg md:text-xl">Hello, Welcome!</h3>
        <p class="text-secondary text-sm">Please fill up necessary requirements to proceed.</p>
      </div>

      <form action="" class="space-y-3 md:space-y-5">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-5"
        >
          <DefaultInput type="text" placeholder="First Name" class="md:w-4/12" />
          <DefaultInput type="text" placeholder="Middle Name" class="md:w-4/12" />
          <DefaultInput type="text" placeholder="Last Name" class="md:w-4/12" />
        </div>

        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-5"
        >
          <DefaultInput type="email" placeholder="Email" class="md:w-6/12" />
          <DefaultInput type="tel" placeholder="Contact Number" class="md:w-6/12" />
        </div>

        <DefaultInput type="password" placeholder="Password" />
        <DefaultInput type="password" placeholder="Retype Password" />

        <div class="grid justify-items-center">
          <DefaultButton class="sm:w-[280px] place-self-center">Sign Up</DefaultButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import DefaultInput from '@/components/DefaultInput.vue'
import DefaultButton from '@/components/DefaultButton.vue'
</script>
