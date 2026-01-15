import emailjs from "@emailjs/browser";

emailjs.init("UFbn5uWj1BeqfkqJU");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form") as HTMLFormElement | null;
  const feedback = document.querySelector("#form-feedback") as HTMLDivElement | null;
  const feedbackText = document.querySelector("#form-feedback-text") as HTMLSpanElement | null;

  if (!form || !feedback || !feedbackText) return;

  const showFeedback = (message: string, success = true) => {
    feedbackText.textContent = message;

    feedback.classList.toggle("border-primary", success);
    feedback.classList.toggle("border-red-500", !success);

    feedback.classList.remove(
      "opacity-0",
      "translate-y-4",
      "pointer-events-none"
    );
    feedback.classList.add(
      "opacity-100",
      "translate-y-0"
    );

    setTimeout(() => {
      feedback.classList.add(
        "opacity-0",
        "translate-y-4",
        "pointer-events-none"
      );
      feedback.classList.remove(
        "opacity-100",
        "translate-y-0"
      );
    }, 3500);
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pvzjxi4",
        "template_kq281d7",
        form
      )
    .then(() => {
      showFeedback("Gracias por tu mensaje. Te responderé pronto.");
      form.reset();
    })
    .catch(() => {
      showFeedback("No fue posible enviar el mensaje. Inténtalo más tarde.", false);
    });
  });
});
