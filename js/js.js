var ex_active=1;
function check(id)
{	
	var ans=$("#"+id).val().toUpperCase().trim();
	var gans=$("#"+id).attr("rel").toUpperCase().trim();
	if(ans==gans)
	{	
		$("#"+id).attr("readonly","readonly");
		$("#"+id).css("background-color","#ddd");
		$("#"+id).parent().find(".status").fadeIn();
	}
	else
	{	
		$("#"+id).attr("readonly","readonly");
		$("#"+id).css("background-color","#ddd");
		$("#"+id).parent().find(".status").attr( "src", "images/icons/wrong.png" );
		$("#"+id).parent().find(".status").fadeIn();
	}
}
$(document).ready(function()
{
	$("#check_button").click(function()
	{	
		if(ex_active==1)
		{
			$( ".answer" ).find("input").each(function( index )
			{
				check($(this).attr("id"));
			});
		}
		else if(ex_active==2)
			$( ".box" ).find("input").each(function( index )
			{
				check($(this).attr("id"));
			});
	});
	$("#button-ex2").click(function()
	{	ex_active=2;
		$("#button-ex2").addClass("active");
		$("#button-ex1").removeClass("active");
		$("#ex1").fadeOut();
		$("#ex2").fadeIn();
	});
	$("#button-ex1").click(function()
	{	ex_active=1;
		$("#button-ex1").addClass("active");
		$("#button-ex2").removeClass("active");
		$("#ex2").fadeOut();
		$("#ex1").fadeIn();
	});
	
});