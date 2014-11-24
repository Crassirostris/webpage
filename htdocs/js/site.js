function adjustWidthTo(imageSelector) {
    var image = $(imageSelector);
    console.log(image);
    var width = image[0].naturalWidth;
    if (width == undefined) {
        var tempImage = new Image();
        tempImage.src = this.src;
        width = tempImage.width;
    }
    console.log(width);
    $('.modal-image-container').width(width);
    $('.modal-content').width(width);
    image.width(width - 20);
}

$(function(){
    var modalImage = document.getElementById("modalImage");
    if (modalImage != null) {
        document.getElementById("modalImage").onload = function () {
            adjustWidthTo('#modalImage');
            $('#loadingImage').hide();
            $('#modalImage').show();
        };
    }

    $('.image-preview').click(function () {
        var href = $(this).attr('full-image');
        $('#modalImage').attr('src', href);

        $('#modalImage').hide();
        $('#loadingImage').show();
        adjustWidthTo('#loadingImage');

        $('#imageModal').modal();
    });
});