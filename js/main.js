// Простой код для нижнего подчеркивания в меню:

// $(document).ready(function(){
//   $('.nav-wrap a').hover(
//     function(){
//       console.log('mouseEnter');
//       $(this).addClass('underline');
//     }, // первая анонимная функция
//     function(){
//       console.log('mouseLeave');
//       $(this).removeClass('underline');
//     } // вторая анонимная функция
//   ); // окончание функции hover
// }); // окончание функции ready


$(document).ready(function() {

    var dropDownTimer = null;

    // Анимация для выпадающего списка
    function toggleDropDownMenu() {
        $('.list').hide();

        // Открываем .list по Mouseenter
        $('.arrows, .list').mouseenter(function(){
            // При каждом mouseenter убиваем старый Таймер,
            // который считает, через какое время надо включить скрытие (300ms)
            clearTimeout(dropDownTimer);
            // Условие при котором mouseenter открываем .list
            $('.list').slideDown(1000);
        })

        // Скрываем .list по mouseleave
        $('.arrows, .list').mouseleave(function(){
            // Через 600ms список уберется через slideDown
            dropDownTimer = setTimeout(function(){
                $('.list').slideUp(1000);
            }, 600)
        })

        // Вешаем mouseenter на .list для того чтобы остановить тот Timer
        // Который хочет закрыть .list через slideDown
        // $('.list').mouseenter(function(){
        //     clearTimeout(dropDownTimer);
        // })

        // Если покидаем область popup (.list), тогда скрываем этот блок
        // Так же, как если бы он скрывался по таймеру (dropDownTimer)
        // $('.list').mouseleave(function(){
        //     dropDownTimer = setTimeout(function(){
        //         $('.list').slideUp(1000);
        //     }, 600)
        // })
    }

    toggleDropDownMenu()

 // Анимация для нижнего подчеркивания в меню header
    var $el, leftPos, newWidth,
        $mainNav = $("#example-one");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#example-one li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    }); // end hover

    // $('.arrows').click(function(){
    //     if($('.list').css('display') == 'none') {
    //          $('.list').slideDown(1000);
    //     } else {
    //         $('.list').slideUp(1000);
    //     }
    // }); // end click

// Анимация для нижнего подчеркивания в меню footer
 var $el, leftPos, newWidth,
        $footerNav = $("#example-two");

    $footerNav.append("<li id='magic-line-2'></li>");
    var $magicLine2 = $("#magic-line-2");

    $magicLine2
        .width($(".current_page").width())
        .css("left", $(".current_page a").position().left)
        .data("origLeft", $magicLine2.position().left)
        .data("origWidth", $magicLine2.width());

    $("#example-two li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine2.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine2.stop().animate({
            left: $magicLine2.data("origLeft"),
            width: $magicLine2.data("origWidth")
        });
    }); // end hover

// // Анимация для первого текста
//     $('.hidden-text').hide();
//    // $('.minus').hide();
//     $('.plus').click(function(){
//         if($('.hidden-text').css('display') == 'none') {
//             $('.data').hide();
//             //$(this).hide();
//             $('.hidden-text').fadeIn(1000);
//             //$('.minus').show();
//             $(this).html("-");
//             } else {
//                 $(this).html("+");
//                 $('.main-text .data').show();
//                 $('.hidden-text').hide();
//             }
//     }); // end click

// Анимация для стрелок
    $('.switch-wrapper .sw-2').hover(
    function(){
        console.log('mouseEnter');
        $(this).attr('style', 'background: #535353');
        $('.switch-wrapper .sw-1').attr('style', 'background: #474747');
    }, // первая анонимная функция
    function(){
      console.log('mouseLeave');
        $(this).attr('style', 'background: #474747');
        $('.switch-wrapper .sw-1').attr('style', 'background: #535353');
    } // вторая анонимная функция
  ); // окончание функции hover

    $('.ar-1').hover(
        function(){
            console.log('mouseEnter');
            $(this).attr('style', 'color: #535353');
        }, // первая анонимная функция
        function(){
          console.log('mouseLeave');
            $(this).attr('style', 'color: #adadad');
        } // вторая анонимная функция
  ); // окончание функции hover

     $('.ar-2').hover(
        function(){
            console.log('mouseEnter');
            $(this).attr('style', 'color: #535353');
        }, // первая анонимная функция
        function(){
          console.log('mouseLeave');
            $(this).attr('style', 'color: #adadad');
        } // вторая анонимная функция
  ); // окончание функции hover

}); // end ready