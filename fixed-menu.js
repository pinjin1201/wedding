
/*
  1. fixed menu
*/

$(function () {

  const $window = $(window)
  // fixed menu item
  const $fixedMenu = $('.fixed-menu')
  const $story = $('#our-story')
  const $gallery = $('#gallery')
  const $about = $('#wedding-about')
  const $studio = $('#wedding-studio')
  const $cookie = $('#wedding-cookie')
  const $rsvp = $('#rsvp')

  // fixed menu icon 
  const $allIcon = $('.fixed-menu .icon')
  const $icon1 = $('.fixed-menu .group:nth-child(1) .icon')
  const $icon2 = $('.fixed-menu .group:nth-child(2) .icon')
  const $icon3 = $('.fixed-menu .group:nth-child(3) .icon')
  const $icon4 = $('.fixed-menu .group:nth-child(4) .icon')
  const $icon5 = $('.fixed-menu .group:nth-child(5) .icon')
  const $icon6 = $('.fixed-menu .group:nth-child(6) .icon')
  const $icon7 = $('.fixed-menu .group:nth-child(7) .icon')

  // fixed menu text 
  const $allText = $('.fixed-menu .text')
  const $text1 = $('.fixed-menu .group:nth-child(1) .text')
  const $text2 = $('.fixed-menu .group:nth-child(2) .text')
  const $text3 = $('.fixed-menu .group:nth-child(3) .text')
  const $text4 = $('.fixed-menu .group:nth-child(4) .text')
  const $text5 = $('.fixed-menu .group:nth-child(5) .text')
  const $text6 = $('.fixed-menu .group:nth-child(6) .text')
  const $text7 = $('.fixed-menu .group:nth-child(7) .text')

  // blcok scrollTop
  const storyScrollTop = calculateHeight($story)       // 700
  const galleryScrollTop = calculateHeight($gallery)   // 1250
  const aboutScrollTop = calculateHeight($about)       // 1714
  const studioScrollTop = calculateHeight($studio)     // 2314
  const cookieScrollTop = calculateHeight($cookie)     // 3234
  const rsvpScrollTop = calculateHeight($rsvp) - 281   // 4000
  
  // screen width
  const screenWidth = $window.width()
  
  // calculate block scrollTop
  function calculateHeight(item) {
    return item.offset().top
  }
  // fill icon color
  function fillIconColor(item) {
    item.css('background-color', '#325032')
  }
  // show fixed menu text
  function showIconText(item) {
    item.show()
  }

  // show fixed menu home  (icon, text)
  // remove fixed menu all text
  $icon1.css('background-color', '#325032')
  $allText.hide()
  $text1.show()


  ////// run fixed menu by scroll
  $window.on('scroll', function () {

    // remove all icon background
    $allIcon.css('background-color', 'transparent')
    // remove all text
    $allText.hide()

    // get user scrollTop
    const scrollTop = $window.scrollTop()

    // show block fixed menu
    if (scrollTop < storyScrollTop) {

      showIconText($text1)
      fillIconColor($icon1)

    } else if (scrollTop >= storyScrollTop && scrollTop < galleryScrollTop) {

      showIconText($text2)
      fillIconColor($icon2)

    } else if (scrollTop >= galleryScrollTop && scrollTop < aboutScrollTop) {

      showIconText($text3)
      fillIconColor($icon3)

    } else if (scrollTop >= aboutScrollTop && scrollTop < studioScrollTop) {

      showIconText($text4)
      fillIconColor($icon4)

    } else if (scrollTop >= studioScrollTop && scrollTop < cookieScrollTop) {

      showIconText($text5)
      fillIconColor($icon5)

    } else if (scrollTop >= cookieScrollTop && scrollTop < rsvpScrollTop) {

      showIconText($text6)
      fillIconColor($icon6)

    } else if (scrollTop >= rsvpScrollTop) {

      showIconText($text7)
      fillIconColor($icon7)

    }


  })


  ////// run fixed menu by mouseover
  $fixedMenu.on('mouseover', '.group', function () {

    const $this = $(this)

    // show each style
    if ($this.attr('id') === 'home-group') {

      showIconText($text1)
      fillIconColor($icon1)

    } else if ($this.attr('id') === 'story-group') {

      showIconText($text2)
      fillIconColor($icon2)

    } else if ($this.attr('id') === 'gallery-group') {

      showIconText($text3)
      fillIconColor($icon3)

    } else if ($this.attr('id') === 'about-group') {

      showIconText($text4)
      fillIconColor($icon4)

    } else if ($this.attr('id') === 'studio-group') {

      showIconText($text5)
      fillIconColor($icon5)

    } else if ($this.attr('id') === 'cookie-group') {

      showIconText($text6)
      fillIconColor($icon6)

    } else if ($this.attr('id') === 'rsvp-group') {

      showIconText($text7)
      fillIconColor($icon7)

    }

  })


  ////// run fixed menu by mouseout
  $fixedMenu.on('mouseout', '.group', function (event) {

    const $this = $(this)

    // remove each style
    $this.children('.icon').css('background-color', 'transparent')
    $this.children('.text').hide()

    // get user scrollTop
    const scrollTop = $window.scrollTop()

    // show block fixed menu
    if (scrollTop < storyScrollTop) {

      showIconText($text1)
      fillIconColor($icon1)

    } else if (scrollTop >= storyScrollTop && scrollTop < galleryScrollTop) {

      showIconText($text2)
      fillIconColor($icon2)

    } else if (scrollTop >= galleryScrollTop && scrollTop < aboutScrollTop) {

      showIconText($text3)
      fillIconColor($icon3)

    } else if (scrollTop >= aboutScrollTop && scrollTop < studioScrollTop) {

      showIconText($text4)
      fillIconColor($icon4)

    } else if (scrollTop >= studioScrollTop && scrollTop < cookieScrollTop) {

      showIconText($text5)
      fillIconColor($icon5)

    } else if (scrollTop >= cookieScrollTop && scrollTop < rsvpScrollTop) {

      showIconText($text6)
      fillIconColor($icon6)

    } else if (scrollTop >= rsvpScrollTop) {

      showIconText($text7)
      fillIconColor($icon7)

    }

  })

  // calculate fixed menu position left
  const number = (screenWidth - 1200) / 2
  if (screenWidth >= 1200) {
    $fixedMenu.css('left', `+=${number}`)
  }

})
