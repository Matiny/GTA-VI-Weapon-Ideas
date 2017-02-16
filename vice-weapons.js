$(document).ready(function () {

   function mobileMenuAlign() { // So the weapon menus line up together
      if ($(window).width() <=900){
         var newTop = $('.loadout').offset().top
         $('.selection').css('top', newTop + 'px');
      }
   }

   mobileMenuAlign();
   $(window).resize(mobileMenuAlign); //B/c it messes up when you rotate the screen

   $('.selection .choice:nth-child(1)').addClass('chosen');

   function pickWeapon(button, category, image1, image2, image3) {
      $(button).click(function () {
         $(category).removeClass('invisible');
         $('.loadout').addClass('invisible');
         $('.choice:nth-child(1)').addClass('item1');
         $('.choice:nth-child(2)').addClass('item2');
         $('.choice:nth-child(3)').addClass('item3');
         $(category + ' .choice:nth-child(1)').click(function () {

            $(button + ' img').attr('src', image1);
            $(this).addClass('chosen')
            .siblings().removeClass('chosen');
            $(category).addClass('invisible');
            $('.loadout').removeClass('invisible');

         });
         $(category + ' .choice:nth-child(2)').click(function () {
            $(button + ' img').attr('src', image2);
            $(this).addClass('chosen')
            .siblings().removeClass('chosen');
            $(category).addClass('invisible');
            $('.loadout').removeClass('invisible');

         });
         $(category + ' .choice:nth-child(3)').click(function () {
            $(button + ' img').attr('src', image3);
            $(this).addClass('chosen')
            .siblings().removeClass('chosen');
            $(category).addClass('invisible');
            $('.loadout').removeClass('invisible');
         });
         $(category + ' .choice').click(function () {
            $('.choice').removeClass('item1 item2 item3');
         })
      });
   }

   pickWeapon('.weapon:nth-child(1)', '.melee', 'svg/melee/fist.svg', 'svg/melee/golf.svg', 'svg/melee/katana.svg');

   pickWeapon('.weapon:nth-child(2)', '.hand', 'svg/hand/eagle.svg', 'svg/hand/saw.svg', 'svg/hand/uzi.svg');

   pickWeapon('.weapon:nth-child(3)', '.rifle', 'svg/rifle/g36.svg', 'svg/rifle/sl8.svg', 'svg/rifle/m82.svg');

   pickWeapon('.weapon:nth-child(4)', '.shotgun', 'svg/shotgun/remy.svg', 'svg/shotgun/m4s90.svg', 'svg/shotgun/aa12.svg');

   pickWeapon('.weapon:nth-child(5)', '.heavy', 'svg/heavy/rpg.svg', 'svg/heavy/minigun.svg', 'svg/heavy/mgl.svg');

   pickWeapon('.weapon:nth-child(6)', '.thrown', 'svg/thrown/grenade.svg', 'svg/thrown/sticky.svg', 'svg/thrown/molotov.svg');

});
