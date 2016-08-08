function hideShit() {
	console.log("Running");
	$("div:contains('shared')").each(function() {
		var $this = $(this);
		if ($this.hasClass("userContentWrapper")) {
			$this.hide();
			console.log("Hid somehting");
		}
	});
}

$(document).ready(function() {
	setInterval(hideShit, 1000);
});