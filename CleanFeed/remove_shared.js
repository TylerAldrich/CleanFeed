function hideShit() {
	$("div:contains('shared')").each(function() {
		var $this = $(this);
		if ($this.hasClass("userContentWrapper")) {
			$this.hide();
		}
	});
}

$(document).ready(function() {
	setInterval(hideShit, 1000);
});