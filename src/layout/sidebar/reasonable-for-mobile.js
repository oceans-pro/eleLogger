import initOrToggleSidebar from '@/store/float-btn-controller/sidebar'

export default function reasonableForMobile() {
  $('#sideBarOutline .nav a').each(function() {
    $(this).click(function(e) {
      if (fn.isMobile()) {
        // 能点说明...这是关闭
        initOrToggleSidebar(false)
      }
    })
  })
}
