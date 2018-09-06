var working=false;							
$(document).ready(function(){ 			
	$(".group_toggle").click(function(event){		
		if (working){return};						
		var group_id=parseInt(this.id.substring(5));  												
		for (var location in simplemaps_namap_mapdata.locations){					
			loc=simplemaps_namap_mapdata.locations[location];
			if (loc.group==group_id){																	
				if (loc.hide!='yes'){
					loc.hide='yes';
					$(this).addClass('hidden');
				}														
				else{
					loc.hide='no',
					$(this).removeClass('hidden');
				}
			}
		}
		working=true;																					
		simplemaps_namap.refresh();	
	}); 
	$(".state_toggle").click(function(event){		
		if (working){return};						
		for (var state in simplemaps_namap_mapdata.state_specific){
			var item=simplemaps_namap_mapdata.state_specific[state];	
			if (item.color!=undefined) {
				if (item.color!='#cecece'){
					item.description=item.color;
					item.color='#cecece';
					$(this).addClass('hidden');
				} else {
					item.color=item.description;
					$(this).removeClass('hidden');
				}
			}
		}
		working=true;																					
		simplemaps_namap.refresh();	
	}); 
	function resizeMap() {
		var browserWidth = document.documentElement.clientWidth;
		if ( browserWidth < 500) {
			simplemaps_namap_mapdata.main_settings.width=425;
		}
		if (browserWidth > 500) {
			simplemaps_namap_mapdata.main_settings.width=500;
		}
		if (browserWidth > 600) {
			simplemaps_namap_mapdata.main_settings.width=700;
		}
		if (browserWidth > 800) {
			simplemaps_namap_mapdata.main_settings.width=600;
		}
		if (browserWidth > 1000) {
			simplemaps_namap_mapdata.main_settings.width=750;
		}
		if (browserWidth > 1200) {
			simplemaps_namap_mapdata.main_settings.width=1000;
		}
		if (browserWidth > 1300) {
			simplemaps_namap_mapdata.main_settings.width=1100;
		}
	}
	resizeMap();
	simplemaps_namap.hooks.ready = function (){
		simplemaps_namap.load();
	};
	$(window).resize(function(){
		resizeMap();
		simplemaps_namap.refresh();
	});
});

simplemaps_namap.hooks.refresh_complete=function(){											
	working=false;						
};