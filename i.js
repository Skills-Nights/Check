/* accordion */
function triggerAccordion() {
  $(".js-accordion__trigger").on("click", (e) => {
    let target = $(e.currentTarget);
    let expanded = target.attr("aria-expanded") === "true" || false;
    let targetContent = target
      .closest(".js-accordion")
      .find(".js-accordion__content");

    /* collapse all accordion contents */
    $(".js-accordion__trigger").attr("aria-expanded", "false");
    $(".js-accordion__content").attr("aria-hidden", "true").slideUp(700);

    /* toggle the target accordion block */
    target.attr("aria-expanded", !expanded);
    targetContent.attr("aria-hidden", expanded);

    let targetContentShown =
      targetContent.attr("aria-hidden") === "true" || false;

    targetContentShown
      ? targetContent.slideUp(700)
      : targetContent.slideDown(700);
  });
}

/* init accordion logic if it exists on the page */
$(".js-accordion") ? triggerAccordion() : false;
