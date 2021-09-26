$(function () {
  if (!$('.envelope').hasClass('open')) {
    $('.envelope').hover(function () {
      $(this).removeClass('new').addClass('open')
    })
  }
})

function PlaySound(soundobj) {
  console.log('Play song')
  var thissound = document.getElementById(soundobj)
  thissound.play()
}
