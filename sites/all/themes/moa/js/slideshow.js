var slideshowTimer;
var slideshowCurrent = 1;

(function($) {
	$(function(){
		$("#block-views-home-header-images-block a.next").click(clickNext);
		$("#block-views-home-header-images-block a.previous").click(clickPrevious);

		if ($("body").hasClass("front"))
			slideshowTimer = setInterval(nextInterval, 6000);
	});

	function clickNext()
	{
		stop();
		next($($("#block-views-home-header-images-block .views-row").stop(true, true).get(slideshowCurrent-1)));
		return false;
	}

	function clickPrevious()
	{
		stop();
		previous($($("#block-views-home-header-images-block .views-row").stop(true, true).get(slideshowCurrent-1)));
		return false;
	}

	function previous($row)
	{
		var $previous = $row.prev();
		if ($previous.length == 0)
			$previous = $row.parent().children().last();
		var rowWidth = $row.width();
		slideshowCurrent = $previous.index()+1;

		$row.css({
			"left":"0"
		}).animate({
			"left":rowWidth+"px"
		});

		$previous.css({
			"left":"-"+rowWidth+"px",
			"display":"block"
		}).animate({
			"left":"0"
		});
	}

	function next($row)
	{
		var $next = $row.next();
		if ($next.length == 0)
			$next = $row.parent().children().first();
		var rowWidth = $row.width();
		slideshowCurrent = $next.index()+1;

		$row.css({
			"left":"0"
		}).animate({
			"left":"-"+rowWidth+"px"
		});

		$next.css({
			"left":rowWidth+"px",
			"display":"block"
		}).animate({
			"left":"0"
		});
	}

	function nextInterval()
	{
		next($($("#block-views-home-header-images-block .views-row").get(slideshowCurrent-1)));
	}

	function stop()
	{
		clearInterval(slideshowTimer);
	}
}(jQuery));
