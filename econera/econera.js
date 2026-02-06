document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Animated Stats Counter
     ========================= */
  const counters = document.querySelectorAll(".stat-num[data-target]");

  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let current = 0;

    const duration = 900; // ms
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);
      current = Math.floor(progress * target);

      counter.textContent = `≈ ${current}+`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter.textContent = `≈ ${target}+`;
      }
    }

    requestAnimationFrame(animate);
  });

  /* =========================
     Invite Button Ripple
     ========================= */
  const inviteBtn = document.querySelector(".invite-btn");

  if (inviteBtn) {
    inviteBtn.addEventListener("click", e => {
      const ripple = document.createElement("span");
      ripple.className = "ripple";

      const rect = inviteBtn.getBoundingClientRect();
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;

      inviteBtn.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  }

  /* =========================
     Sidebar Auto-Close
     ========================= */
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarLinks = document.querySelectorAll(".sidebar nav a");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebarToggle.checked = false;
    });
  });

});
