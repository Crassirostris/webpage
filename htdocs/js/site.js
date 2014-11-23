$(function(){
    var modalImage = document.getElementById("modalImage");
    if (modalImage != null) {
        document.getElementById("modalImage").onload = function () {
            var width = document.getElementById("modalImage").naturalWidth;
            if (width == undefined) {
                var image = new Image();
                image.src = this.src;
                width = image.width;
            }
            $('.modal-image-container').width(width);
            $('.modal-content').width(width);
            $('#modalImage').width(width - 20);
        };
    }

    $('.image-preview').click(function () {
        var href = $(this).attr('full-image');
        $('#modalImage').width(10000);
        $('#modalImage').attr('src', href);
        $('#imageModal').modal();
    });
});