
/*
  1. mobile menu
  2. gallery animation
*/

$(function () {

  const $window = $(window)
  const $mobileMenu = $('.mobile-menu')
  const $mobileMenuClicked = $('.mobile-menu-clicked')
  const $gallery = $('.gallery')
  const $galleryImage = $('.gallery div')
  const $galleryIMG = $('.gallery img')

  // click mobile menu
  $mobileMenu.on('click', function (event) {
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

  ///// run animation
  // screen > 1100 px
  if ($window.width() > 1100) {

    $galleryIMG.hide()

    // start to run
    function action() {

      // fadeIn image
      function fadeInImage($gallery, $galleryImage) {
        $gallery.hide().fadeIn()
        $galleryImage.hide().fadeIn()
      }

      // run pre image
      for (let i = 0; i < 10; i++) {
        setTimeout(animation, 3000 * [i])
        function animation() {
          $gallery.css('background-image', `url(image/animation${[i]}.jpg)`)
          $galleryImage.css('background-image', `url(image/animation${[i]}.jpg)`)
          fadeInImage($gallery, $galleryImage)
        }
      }

    }
    action()
    setInterval(action, 30000)

    // screen <= 1100 px
  } else if ($window.width() <= 1100) {

    // remove gallery, gallery div background image
    $gallery.css({
      'background-image': 'none',
      'background-color': '#0a3250',
      'height': 'auto'
    })
    $galleryImage.hide()

    $galleryIMG.fadeOut()

    // start to run
    function action() {

      // run pre img
      for (let i = 0; i < 10; i++) {
        setTimeout(animation, 3000 * [i])
        function animation() {
          $galleryIMG.attr('src', `image/animation${[i]}.jpg`)
          $galleryIMG.hide().fadeIn()
        }
      }

    }
    action()
    setInterval(action, 30000)
  }

})