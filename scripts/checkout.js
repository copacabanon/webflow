// Hack way to get & display Montage Price and total in checkout.
    $(window).on('load', function() {
        var totalPrice = 0;
        var montageprice = 0;

        var checkExist = setInterval(function() {
            if ($('.priceitotalitem').length && $('.priceitotalitem:first').html()) {
                $('.priceitotalitem').each(function( index ) {
                    totalPrice += parseInt($(this).html().replace( /\D+/g, ''));
                    //console.log(totalPrice);
                });
                if (totalPrice) {$('.pricetotal').html(totalPrice +' â‚¬');}
                montageprice = $('.pricemontagecheckout').html();
                $('#montageAmountText').html('Prix du montage en option : ' + montageprice + 'â‚¬');
                if (montageprice){
                    $('.pricetotalmontage').html(montageprice +' â‚¬');
                } else {
                    $('.titre-h3-panier-montage').remove();
                    $('.pricetotalmontage').remove();
                    $('.blocmontage').remove();
                }

                clearInterval(checkExist);
            }
         }, 100);
    });
