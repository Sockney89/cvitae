<script setup>

const data = await queryContent('/self').findOne();


</script>
<template>
  <div id="main-body" class="w-full h-screen" >
    
    <!--
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    -->

    <div id="container" class="w-10/12 mx-auto h-full px-10 border-x-2 border-primary " >
      <div id="header" class="font-bruno text-5xl">
         <p>{{ data.self.name }}</p>
        {{ data.self.dob }}
        <p >{{ data.self.contact.email }}</p>
      </div>

      <div id="body" class="font-squada text-xl ">
          <div v-for="intro in data.intro">
              <p>{{ intro }}</p>
          </div>
      </div>

      <div id="contact">

      </div>

      <div id="footer">

      </div>
    </div>
    
  </div>


</template>


