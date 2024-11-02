<template>
  <section class="bg-primary w-full">
    <div class="grid sm:grid-cols-2 p-8" data-aos="zoom-in">
      <div>
        <h1 class="text-black text-3xl font-extrabold">Contact Us</h1>
        <p class="text-sm text-black mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quo
          exercitationem officiis quibusdam mollitia vel assumenda culpa debitis
          hic! Amet neque, molestiae aliquam exercitationem
        </p>
        <div class="mt-12">
          <h2 class="text-black text-base font-bold">Email</h2>
          <ul class="mt-4">
            <li class="flex items-center">
              <div
                class="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
              >
                <img
                  src="https://img.icons8.com/ios-filled/24/new-post.png"
                  alt="new post"
                />
              </div>
              <a href="#" class="text-black text-sm ml-4">
                <small class="block">Mail</small>
                <strong>info@example.com</strong>
              </a>
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <h2 class="text-black text-base font-bold">Socials</h2>
          <ul class="flex mt-4 space-x-4">
            <li
              class="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
            >
              <a href="#">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/facebook-f.png"
                  alt="facebook-f"
                />
              </a>
            </li>
            <li
              class="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
            >
              <a href="#">
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/ios-filled/24/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <form class="ml-auto space-y-4">
        <input
          type="text"
          placeholder="Name"
          class="w-full rounded-md py-3 px-4 text-black text-sm border border-black bg-transparent"
        />
        <input
          type="email"
          placeholder="Email"
          class="w-full rounded-md py-3 px-4 text-black text-sm border border-black bg-transparent"
        />
        <input
          type="text"
          placeholder="Subject"
          class="w-full rounded-md py-3 px-4 text-black text-sm border border-black bg-transparent"
        />
        <textarea
          placeholder="Message"
          rows="6"
          class="w-full rounded-md px-4 text-black text-sm pt-3 border border-black bg-transparent"
        ></textarea>
        <button
          class="w-full bg-secondary2 p-4 font-bold border border-b-4 border-black rounded-3xl 
          hover:text-primary hover:border-secondary2"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
input::placeholder {
    color: black;
}
textarea::placeholder{
    color: black;
}
</style>
