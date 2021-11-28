/* ==========================================================
[ 目次 ]

<body>クラス設定
スムース スクロール

========================================================== */

/* ---------------------------------------------
*   <body>クラス設定
--------------------------------------------- */
/**
 * <body>要素に、ユーザーのOS・デバイスとブラウザ等に関数情報をクラスとして付与する
 * OS・デバイス: ios, iphone, ipad, android, androidphone, androidtablet, windows, mac
 * ブラウザ: ie, edge, chrome, firefox, safari
 */
$(function () {
    'use strict';

    $('body').addClass(function () {
        var bodyClasses = '';

        // プラットフォーム判定
        if (is.ios()) {
            bodyClasses += ' ios';

            if (is.iphone()) {
                bodyClasses += ' iphone';
            } else if (is.ipad()) {
                bodyClasses += ' ipad';
            }
        } else if (
            window.navigator.userAgent.toLowerCase().indexOf('macintosh') >
                -1 &&
            'ontouchend' in document
        ) {
            bodyClasses += ' ipad';
        } else if (is.android()) {
            bodyClasses += ' android';

            if (is.androidPhone()) {
                bodyClasses += ' androidphone';
            } else if (is.androidTablet()) {
                bodyClasses += ' androidtablet';
            }
        } else if (is.windows()) {
            bodyClasses += ' windows';
        } else if (is.mac()) {
            bodyClasses += ' mac';
        }

        // ブラウザ判定
        if (is.ie()) {
            bodyClasses += ' ie';

            if (is.ie(10)) {
                bodyClasses += ' ie10';
            } else if (is.ie(11)) {
                bodyClasses += ' ie11';
            }
        } else if (
            is.edge() ||
            window.navigator.userAgent.toLowerCase().indexOf('edg') > -1
        ) {
            bodyClasses += ' edge';
        } else if (is.chrome()) {
            bodyClasses += ' chrome';
        } else if (is.firefox()) {
            bodyClasses += ' firefox';
        } else if (is.safari()) {
            bodyClasses += ' safari';
        }

        return bodyClasses;
    });
});

/* ---------------------------------------------
*   スムース スクロール
--------------------------------------------- */
$(function () {
    'use strict';

    $('a[href^="#"]').on('click.smoothScroll', function () {
        var href = $(this).attr('href');
        var $target;

        if (is.ie(9) || is.ie(10)) {
            $target = $(href === '#' ? 'body' : href);
        } else {
            $target = $(href === '#' ? 'html' : href);
        }

        var offset = 0;

        // スクロール位置をずらす場合は、
        // ここで条件分岐等を行う

        $target.velocity('scroll', {
            duration: 400,
            easing: 'swing',
            offset: offset
        });

        return false;
    });
});
