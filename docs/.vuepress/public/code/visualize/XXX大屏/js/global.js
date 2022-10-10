function resetTheme(){
    const currTheme = localStorage.getItem('zhj_theme')
    if(currTheme === '0'){
        $('html').css('backgroundColor', '#0D0B41')
        $('.theme-wrapper').css('background', 'url("./images/darken-bg.png") no-repeat center/cover')
    } else if(currTheme === '2') {
        $('html').css('backgroundColor', '#256CBF')
        $('.theme-wrapper').css('background', 'url("./images/lighten-bg.png") no-repeat center/cover')
    } else {
        $('html').css('backgroundColor', '#15357C')
        $('.theme-wrapper').css('background', 'url("./images/middle-bg.png") no-repeat center/cover')
    }
}