
$('.texto').hide();

$(function () {
    var selectedItem;

    $('.itemTitle').click(function () {
        var texto = $(this).next();

        if (selectedItem) {
            selectedItem.hide('slow');
            $('.arrow', selectedItem.parent()).css({
                transform: 'rotate(45deg)'
            });
        }

        if (texto.is(selectedItem)) {
            selectedItem = null;
            return;
        }

        $('.arrow', this).css({
            transform: 'rotate(-135deg)'
        });

        selectedItem = texto;
        selectedItem.show('slow');
    });
});