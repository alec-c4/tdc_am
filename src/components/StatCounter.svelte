<script>
  let { value, label } = $props();

  let el = $state();
  let display = $state(value);

  let numericPart = $derived(parseInt(value, 10));
  let suffix = $derived(value.replace(/^[0-9]+/, ""));
  let hasNumber = $derived(!Number.isNaN(numericPart));

  function animateIn(node) {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!hasNumber || reduceMotion) {
      display = value;
      return {};
    }

    display = `0${suffix}`;
    const duration = 900;
    let start;
    let frame;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        function tick(ts) {
          if (start === undefined) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          display = `${Math.round(eased * numericPart)}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        }
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return {
      destroy() {
        observer.disconnect();
        if (frame) cancelAnimationFrame(frame);
      },
    };
  }
</script>

<div class="readout" bind:this={el} use:animateIn>
  <div class="n mono num">{display}</div>
  <div class="label">{label}</div>
</div>

<style>
  .readout {
    padding: 22px clamp(20px, 5vw, 56px);
    border-right: 1px solid var(--line);
  }
  .readout:last-child {
    border-right: none;
  }
  .n {
    font-size: 2rem;
    font-weight: 600;
    color: var(--apricot);
  }
  .label {
    color: var(--ink-soft);
    font-size: 0.85rem;
    margin-top: 2px;
  }
  @media (max-width: 700px) {
    .readout {
      border-right: none;
      border-bottom: 1px solid var(--line);
    }
    .readout:last-child {
      border-bottom: none;
    }
  }
</style>
