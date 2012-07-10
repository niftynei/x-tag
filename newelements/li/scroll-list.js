(function(){

	var openLink = function (e) {
		window.location = this.getAttribute('href');	
	};
	xtag.register('x-li', {
		events: {
			'tap': openLink
		},
		onCreate : function(){
			var href = this.getAttribute('href');
			var a = document.createElement('a');
			this.style.cursor = 'pointer';
			a.setAttribute('href', href);
			a.style.display='none';
			this.appendChild(a);
		}
	});
})();
