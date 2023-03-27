<script>
  export let refsList;
  let count = 0;

  function increment() {
    if (count >= 2) {
      count = 0;
    } else {
      count += 1;
    }
  }
  function decrement() {
    if (count <= 0) {
      count = 2;
    } else {
      count -= 1;
    }
  }
</script>

<div id="references"
  class="flex flex-col md:flex-row p-24 w-full bg-[#2b2b2b] md:space-x-40 justify-center items-center"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={decrement}
    class="hidden md:flex w-16 h-16 bg-blue-500 rounded-lg py-5 px-5 group hover:bg-white transition ease-in-out"
  >
    <i
      class="fa-solid fa-arrow-left fill-current text-center text-xl text-white group-hover:text-blue-500"
    />
  </div>
  <!-- reference -->
  <div class="md:hidden block">
    {#each refsList as refItem}
      <div
        id="referenceElement"
        class="flex flex-col transition-opacity animate-bounce ease-in-out justify-center items-center p-4"
      >
        <div class="text text-white text-xl font-semibold">{refItem.name}</div>
        <div class="text text-white text-xl font-semibold">
          {refItem.company}
        </div>
        <div class="text text-gray-500 text-base font-normal">
          {refItem.reference}
        </div>
      </div>
    {/each}
  </div>
  <div
    id="referenceElement"
    class="hidden md:flex flex-col transition-opacity animate-bounce ease-in-out justify-center items-center p-4"
  >
    <div class="text text-white text-xl font-semibold">
      {refsList[count].name}
    </div>
    <div class="text text-white text-xl font-semibold">
      {refsList[count].company}
    </div>
    <div class="text text-gray-500 text-base font-normal">
      {refsList[count].reference}
    </div>
  </div>
  <!-- right button  -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={increment}
    class="hidden md:flex w-16 h-16 bg-blue-500 rounded-lg py-5 px-5 
                group hover:bg-white transition ease-in-out"
  >
    <i
      class="fa-solid fa-arrow-right fill-current text-center text-xl text-white group-hover:text-blue-500"
    />
  </div>
</div>
