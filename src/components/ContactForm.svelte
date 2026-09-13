<script>
  let { labels } = $props();

  let firstName = $state("");
  let lastName = $state("");
  let email = $state("");
  let subject = $state("");
  let message = $state("");
  /** @type {"idle" | "notice" | "success" | "error"} */
  let status = $state("idle");

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !isValidEmail(email) || !message.trim()) {
      status = "error";
      return;
    }

    // TODO: wire up a real submission endpoint (serverless function + email, or a
    // third-party form service — see .ai/redesign-plan.md §6.2) and swap this stub for
    // an actual request, setting status to "success" or "error" from the response.
    status = "notice";
  }
</script>

<form onsubmit={handleSubmit} novalidate>
  <div class="row">
    <label>
      <span>{labels.firstName}*</span>
      <input type="text" bind:value={firstName} required autocomplete="given-name" />
    </label>
    <label>
      <span>{labels.lastName}*</span>
      <input type="text" bind:value={lastName} required autocomplete="family-name" />
    </label>
  </div>
  <label>
    <span>{labels.email}*</span>
    <input type="email" bind:value={email} required autocomplete="email" />
  </label>
  <label>
    <span>{labels.subject}</span>
    <input type="text" bind:value={subject} />
  </label>
  <label>
    <span>{labels.message}*</span>
    <textarea rows="5" bind:value={message} required></textarea>
  </label>

  <div class="footer-row">
    <button class="btn btn-primary" type="submit">{labels.submit}</button>
    {#if status === "notice"}
      <p class="notice" role="status">{labels.pendingNotice}</p>
    {:else if status === "success"}
      <p class="notice success" role="status">{labels.success}</p>
    {:else if status === "error"}
      <p class="notice error" role="alert">{labels.error}</p>
    {/if}
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 22px;
    max-width: 640px;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 0.88rem;
    color: var(--ink-soft);
  }
  input,
  textarea {
    font: inherit;
    color: var(--ink);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--line);
    padding: 8px 2px;
    resize: vertical;
  }
  input:focus-visible,
  textarea:focus-visible {
    outline: none;
    border-bottom-color: var(--apricot);
  }
  .footer-row {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }
  .notice {
    font-size: 0.88rem;
    color: var(--ink-soft);
    margin: 0;
  }
  .notice.error {
    color: var(--apricot-deep);
  }
  @media (max-width: 560px) {
    .row {
      grid-template-columns: 1fr;
    }
  }
</style>
