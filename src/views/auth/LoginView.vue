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

      <form @submit="onSubmit">
        <DefaultInput
          name="email"
          type="email"
          placeholder="Email"
          :modelValue="email"
          @update:modelValue="(newEmail) => (email = newEmail)"
          :errorBorder="getErrorBorder('email')"
        />
        <span v-show="errors.email" class="text-xs ml-1 text-red-700">{{ errors.email }}</span>

        <DefaultInput
          name="password"
          type="password"
          placeholder="Password"
          :modelValue="password"
          @update:modelValue="(newPassword) => (password = newPassword)"
          :errorBorder="getErrorBorder('password')"
        />
        <span v-show="errors.password" class="text-xs ml-1 text-red-700">{{
          errors.password
        }}</span>

        <div class="flex justify-end mb-5">
          <p class="text-sm text-secondary cursor-pointer">Forgot password?</p>
        </div>

        <DefaultButton class="mb-5">Sign in</DefaultButton>
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
        <span class="text-primary font-bold cursor-pointer hover:underline underline-offset-2"
          >Register</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import DefaultButton from '@/components/DefaultButton.vue'
import DefaultInput from '@/components/DefaultInput.vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .nonempty('Email is required')
      .min(8, { message: 'Email must atleast 8 characters.' })
      .email({ message: 'Invalid email format.' })
      .regex(/[a-zA-Z]/, { message: 'Email must contain at least one letter.' })
      .regex(/\d/, { message: 'Email must contain at least one number.' }),
    password: zod
      .string()
      .nonempty('Password is required')
      .min(8, { message: 'Password must atleast 8 characters.' })
  })
)

const { handleSubmit, errors } = useForm({
  validationSchema
})

const { value: email } = useField('email')
const { value: password } = useField('password')

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

function getErrorBorder(inputName) {
  return errors.value[inputName]
    ? 'focus:ring-red-700 mb-0 border-red-700'
    : 'focus:ring-primary mb-5'
}
</script>
