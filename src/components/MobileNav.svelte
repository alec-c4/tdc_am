<script>
  import { href, routes } from "../i18n/routes";
  import { locales, localeLabels } from "../i18n";

  let { locale, path, navItems } = $props();
  let open = $state(false);

  function close() {
    open = false;
  }
</script>

<button
  class="toggle"
  aria-expanded={open}
  aria-controls="mobile-nav-panel"
  aria-label={open ? "Close menu" : "Open menu"}
  onclick={() => (open = !open)}
>
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</button>

{#if open}
  <div class="panel" id="mobile-nav-panel">
    <nav>
      {#each navItems as item (item.path)}
        <a href={href(locale, item.path)} onclick={close}>{item.label}</a>
      {/each}
    </nav>
    <div class="langs">
      {#each locales as l (l)}
        <a href={href(l, path)} aria-current={l === locale ? "true" : "false"} onclick={close}>
          {localeLabels[l]}
        </a>
      {/each}
    </div>
  </div>
{/if}

<style>
  .toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 34px;
    height: 34px;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
  .bar {
    display: block;
    height: 2px;
    background: var(--ink);
    border-radius: 1px;
  }
  .panel {
    position: fixed;
    inset: 65px 0 0 0;
    background: var(--stone);
    border-top: 1px solid var(--line);
    padding: 28px clamp(20px, 5vw, 56px);
    display: flex;
    flex-direction: column;
    gap: 32px;
    z-index: 30;
  }
  .panel nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .panel nav a {
    text-decoration: none;
    color: var(--ink);
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 700;
  }
  .panel .langs {
    display: flex;
    gap: 18px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
  }
  .panel .langs a {
    text-decoration: none;
    color: var(--ink-soft);
  }
  .panel .langs a[aria-current="true"] {
    color: var(--apricot-deep);
    font-weight: 700;
  }
  @media (max-width: 860px) {
    .toggle {
      display: flex;
    }
  }
</style>
