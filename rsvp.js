
/*
  1. form submit
  2. mobile menu
*/

$(function () {

  // mobile-menu, form
  const $mobileMenu = $('.mobile-menu')
  const $mobileMenuClicked = $('.mobile-menu-clicked')
  const $rsvp = $('.rsvp')
  const $form = $('form')

  // click mobile menu
  $mobileMenu.on('click', function () {
    $mobileMenu.hide()
    $mobileMenuClicked.show()
  })

  // click mobile menu item
  $mobileMenuClicked.on('click', function (event) {
    if (event.target.matches('A') || event.target.matches('DIV')) {
      $mobileMenuClicked.hide()
      $mobileMenu.show()
    }
  })

  ///// form submit
  $form.on('submit', function () {

    // renew rsvp element class value
    $rsvp.attr('class', 'submit-page')

    const $submitPage = $('.submit-page')

    // submit Page
    const submittedPage = `
      <div class="title">Thank you! See you soon</div>
      <div class="text">
        An email with the event's details was sent to you
      </div>
      <div class="btn">
        <a href="index.html">Back to site</a>
      </div>
    `
    $submitPage.html(submittedPage)

  })


})