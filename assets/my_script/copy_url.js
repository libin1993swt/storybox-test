
function copyToClipboard(element) {
    var msg = $(element).closest("tr").find(".short_url").text();
    $("#copy_text").val(msg);

    $("#copy_text").select();
    document.execCommand("copy");
    alert('short url copied.');
}
