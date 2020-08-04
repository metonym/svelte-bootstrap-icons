<script>
  import * as icons from "svelte-bootstrap-icons";
  import { Navigation, Box } from "svelte-primer";
  import Copy from "../components/Copy.svelte";

  let tabIndexInstall = 0;

  $: codeInstall =
    tabIndexInstall === 0
      ? "yarn add -D svelte-bootstrap-icons"
      : "npm -i -D svelte-bootstrap-icons";
  $: iconKeys = Object.keys(icons);
</script>

<style>
  main {
    position: relative;
    max-width: 36rem;
    padding: 1rem;
    margin: 0 auto;
  }

  .icons {
    position: relative;
    max-width: 82.5rem;
    padding: 1rem;
    margin: 0 auto;
  }

  code {
    padding: 1rem;
  }
</style>

<main>
  <h1 class="mb-3">svelte-bootstrap-icons</h1>
  <Navigation.TabNav>
    <Navigation.TabNavItem
      current={tabIndexInstall === 0}
      on:click={(e) => {
        e.preventDefault();
        tabIndexInstall = 0;
      }}>
      yarn
    </Navigation.TabNavItem>
    <Navigation.TabNavItem
      current={tabIndexInstall === 1}
      on:click={(e) => {
        e.preventDefault();
        tabIndexInstall = 1;
      }}>
      npm
    </Navigation.TabNavItem>
  </Navigation.TabNav>
  <Box.Box class="d-flex">
    <pre class="d-flex flex-1">
      <code>{codeInstall}</code>
    </pre>
    <Copy text={codeInstall} />
  </Box.Box>
</main>

<div class="icons d-flex flex-column">
  <div class="mb-3">{iconKeys.length} total icons</div>
  <div class="d-flex flex-wrap">
    {#each iconKeys as icon}
      <Box.Box class="p-2 mr-2 mb-2">
        <div class="mb-1">
          <h6>{icon}</h6>
        </div>
        <div>
          <svelte:component this={icons[icon]} />
        </div>
      </Box.Box>
    {/each}
  </div>
</div>
