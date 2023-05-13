<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <img src="/LOGO.svg" alt="logo" />
    <p class="text-[#595959] text-sm">Streamline Your Events with Eventurs</p>
    <div
      class="bg-[#EEEEEE] rounded-2xl w-[90%] md:w-[400px] p-6 md:p-[60px] space-y-5 mt-8 md:mt-11 shadow-md shadow-gray-400"
    >
      <div>
        <h3 class="text-[#000000] font-medium text-lg md:text-xl">Hello, Welcome!</h3>
        <p class="text-[#595959] text-sm">Please sign in to continue</p>
      </div>

      <form action="" class="space-y-5">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />

        <div class="flex justify-end">
          <p class="text-sm text-[#595959] cursor-pointer">Forgot password?</p>
        </div>

        <Button>Sign in</Button>
      </form>

      <div class="flex items-center my-4">
        <hr class="flex-grow border-gray-400" />
        <span class="mx-2 text-gray-500 text-sm">or with continue</span>
        <hr class="flex-grow border-gray-400" />
      </div>

      <div class="flex justify-center space-x-8">
        <img src="/googleLogo.svg" alt="google" class="cursor-pointer" />
        <img src="/facebookLogo.svg" alt="facebook" class="cursor-pointer" />
      </div>

      <p class="text-center text-[#595959] text-sm">
        Don't have an account?
        <span class="text-[#2C74B3] font-bold cursor-pointer">Register</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
</script>
