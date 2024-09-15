<script setup lang="ts">


</script>

<template>
  <div class="flex h-full w-full items-center justify-center bg-[#eee]">
    <div class="max-w-3xl lg:max-w-6xl flex items-center grow bg-cardbg justify-stretch flex-col lg:flex-row-reverse">
      <section class="p-20 min-h-96 flex-auto w-full shadow-[0_0_3px_3px_rgba(100,100,100,.1)]">
        <p class="font-bold">Sign up</p>
        <form class="flex flex-col">
          <fieldset class="border-solid border-[#e5e5e5] border mt-6 has-[input:user-invalid]:border-signin">
            <legend class="ml-4 text-[#a3a3a3]">Company name</legend>
            <input class="outline-0 w-full px-4 leading-8" required/>
            <p class="text-signin absolute">Company name cannot be blank.</p>
          </fieldset>
          <fieldset class="border-solid border-[#e5e5e5] border mt-6 has-[input:user-invalid]:border-signin">
            <legend class="ml-4 text-[#a3a3a3]">Email</legend>
            <input class="outline-0 w-full px-4 leading-8" required/>
            <p class="text-signin absolute">Email cannot be blank.</p>
          </fieldset>
          <fieldset class="border-solid border-[#e5e5e5] border mt-6 has-[input:user-invalid]:border-signin">
            <legend class="ml-4 text-[#a3a3a3]">Password</legend>
            <input class="outline-0 w-full px-4 leading-8" required/>
            <p class="text-signin absolute">Password cannot be blank.</p>
          </fieldset>
          <div class="mt-5">
            <label>
              <input type="checkbox" class="scale-125">
              <span class="pl-3">I accept the <a>Terms of Use</a> and <a>Privacy Policy</a></span>
            </label>
          </div>
          <button class="bg-buttonbg rounded-3xl px-8 py-2 mt-10 w-fit self-end">Sign Up</button>
        </form>
      </section>
      <section class="md:shrink-0 p-8 text-[#fff] self-stretch bg-gradient-to-t from-[#ea580c] to-buttonbg">
        <p class="text-4xl max-w-md hidden lg:block">Make your hiring process predictive and simple</p>
        <p class="mt-6 hidden lg:block">Please fill in this form to create an account</p>

        <p class="lg:mt-20">If you are a member, please</p>
        <button class="w-full bg-signin rounded-xl text-sm p-1 mt-3">sign in</button>
      </section>

    </div>
  </div>
</template>

<style scoped>
  fieldset > input:user-invalid + p {
    visibility: visible;
  }
  fieldset > input + p {
    visibility: hidden;
  }

</style>
