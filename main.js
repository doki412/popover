//初始化
var show = false
$(popover).hide()

$(clickMe).on('click', function (e) {
  show = !show
  if (show) {
    $(popover).show()
    setTimeout(function () {
      $(document).one('click', function () {
        $(popover).hide()
        show = !show
      })
    }, 0)
  } else {
    $(popover).hide()
    show = !show
  }
})