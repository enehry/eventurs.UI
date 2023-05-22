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

      <div v-if="errorStore.hasErrors">
        <p class="text-red-700 text-sm">{{ errorStore.state.message }}</p>
      </div>

      <form @submit="onSubmit">
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-3 md:space-x-5"
        >
          <div class="md:w-4/12">
            <DefaultInput
              name="firstName"
              type="text"
              placeholder="First Name"
              :modelValue="firstName"
              @update:modelValue="(newFirstName) => (firstName = newFirstName)"
              :errorBorder="getErrorBorder('firstName')"
            />
            <span v-show="errors.firstName" class="text-xs ml-1 text-red-700">{{
              errors.firstName
            }}</span>
          </div>
          <div class="md:w-4/12">
            <DefaultInput
              name="middleName"
              type="text"
              placeholder="Middle Name"
              :modelValue="middleName"
              @update:modelValue="(newMiddleName) => (middleName = newMiddleName)"
              :errorBorder="getErrorBorder('middleName')"
            />
            <span v-show="errors.middleName" class="text-xs ml-1 text-red-700">{{
              errors.middleName
            }}</span>
          </div>
          <div class="md:w-4/12">
            <DefaultInput
              name="lastName"
              type="text"
              placeholder="Last Name"
              :modelValue="lastName"
              @update:modelValue="(newLastName) => (lastName = newLastName)"
              :errorBorder="getErrorBorder('lastName')"
            />
            <span v-show="errors.lastName" class="text-xs ml-1 text-red-700">{{
              errors.lastName
            }}</span>
          </div>
        </div>

        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-3 md:space-x-5"
        >
          <div class="md:w-6/12">
            <DefaultInput
              name="email"
              type="email"
              placeholder="Email"
              :modelValue="email"
              @update:modelValue="(newEmail) => (email = newEmail)"
              :errorBorder="getErrorBorder('email')"
            />
            <span v-show="errors.email" class="text-xs ml-1 text-red-700">{{ errors.email }}</span>
          </div>
          <div class="md:w-6/12">
            <DefaultInput
              name="contactNo"
              type="tel"
              placeholder="Contact Number"
              :modelValue="contactNo"
              @update:modelValue="(newContactNo) => (contactNo = newContactNo)"
              :errorBorder="getErrorBorder('contactNo')"
            />
            <span v-show="errors.contactNo" class="text-xs ml-1 text-red-700">{{
              errors.contactNo
            }}</span>
          </div>
        </div>

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

        <DefaultInput
          name="confirmPassword"
          type="password"
          placeholder="Retype Password"
          :modelValue="confirmPassword"
          @update:modelValue="(newConfirmPassword) => (confirmPassword = newConfirmPassword)"
          :errorBorder="getErrorBorder('confirmPassword')"
        />
        <span v-show="errors.confirmPassword" class="text-xs ml-1 text-red-700">{{
          errors.confirmPassword
        }}</span>

        <div class="grid justify-items-center">
          <DefaultButton
            :isLoading="loadingStore.state.status === 'loading'"
            class="sm:w-[280px] place-self-center mt-3"
            >Sign Up</DefaultButton
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import DefaultInput from '@/components/DefaultInput.vue'
import DefaultButton from '@/components/DefaultButton.vue'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'
import { useAuthStore } from '../../stores/auth.store'
import { useErrorStore } from '../../stores/error.store'
import { useLoadingStore } from '../../stores/loading.store'

const authStore = useAuthStore()
const errorStore = useErrorStore()
const loadingStore = useLoadingStore()

const validationSchema = toTypedSchema(
  zod.object({
    firstName: zod
      .string()
      .nonempty('First name is required.')
      .min(2, 'First name must be at least 2 characters.')
      .max(50, 'First name must not exceed 50 characters.')
      .regex(/^[A-Za-z ]+$/, 'First name should only contain letters.'),
    middleName: zod
      .string()
      .min(2, 'Middle name require 2 characters.')
      .max(50, 'Middle name must not exceed 50 characters.')
      .regex(/^[A-Za-z ]+$/, 'Middle name should only contain letters.'),
    lastName: zod
      .string()
      .nonempty('Last name is required.')
      .min(2, 'Last name must be at least 2 characters.')
      .max(50, 'Last name must not exceed 50 characters.')
      .regex(/^[A-Za-z ]+$/, 'Last name should only contain letters.'),
    contactNo: zod
      .string()
      .nonempty('Contact number is required.')
      .regex(/^\d+$/, {
        message: 'Contact number should contain only numbers.'
      })
      .length(11, { message: 'Contact number must be 11 digits.' }),
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
      .min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: zod
      .string()
      .nonempty('Confirm password is required.')
      .refine((value) => value === password.value, {
        message: 'Passwords do not match.',
        path: ['confirmPassword']
      })
  })
)

const { handleSubmit, errors } = useForm({
  validationSchema
})

const { value: firstName } = useField('firstName')
const { value: middleName } = useField('middleName')
const { value: lastName } = useField('lastName')
const { value: contactNo } = useField('contactNo')
const { value: email } = useField('email')
const { value: password } = useField('password')
const { value: confirmPassword } = useField('confirmPassword')

const onSubmit = handleSubmit(
  ({ firstName, middleName, lastName, email, password, confirmPassword }) => {
    //TODO: implement the registration logic here use the authStore
    const fullName = `${firstName} ${middleName.charAt(0)}. ${lastName}`

    authStore.register(fullName, email, password, confirmPassword)
  }
)

function getErrorBorder(inputName) {
  return errors.value[inputName]
    ? 'focus:ring-red-700 mb-0 border-red-700'
    : 'focus:ring-primary mb-5'
}
</script>
