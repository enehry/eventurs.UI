<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <img src="@/assets/icons/LOGO.svg" alt="logo" />
    <p class="text-secondary text-sm">Streamline Your Events with Eventurs</p>

    <div
      class="bg-cardBg rounded-2xl w-11/12 sm:w-[400px] p-6 sm:p-[60px] space-y-5 mt-8 sm:mt-11 shadow-md shadow-gray-400"
    >
      <div>
        <h3 class="text-blackText font-medium text-lg md:text-xl">Hello, Welcome!</h3>
        <p class="text-secondary text-sm">Please sign in to continue</p>
      </div>

      <form action="" class="space-y-3 sm:space-y-5">
        <DefaultInput type="text" placeholder="Username" />
        <DefaultInput type="password" placeholder="Password" />

        <div class="flex justify-end">
          <p class="text-sm text-secondary cursor-pointer">Forgot password?</p>
        </div>

        <DefaultButton>Sign in</DefaultButton>
      </form>

      <div class="flex items-center my-5">
        <hr class="flex-grow border-gray-400" />
        <span class="mx-2 text-gray-500 text-sm">or with continue</span>
        <hr class="flex-grow border-gray-400" />
      </div>

      <div class="flex justify-center space-x-8">
        <img src="@/assets/icons/googleLogo.svg" alt="google" class="cursor-pointer" />
        <img src="@/assets/icons/facebookLogo.svg" alt="facebook" class="cursor-pointer" />
      </div>

      <p class="text-center text-secondary text-sm">
        Don't have an account?
        <span class="text-primary font-bold cursor-pointer">Register</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import DefaultButton from '@/components/DefaultButton.vue'
import DefaultInput from '@/components/DefaultInput.vue'
</script>
