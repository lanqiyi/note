//var getI18nMsg = chrome.i18n.getMessage("status",messages.json?);
var util = {
	isLink: function(link) {
			return (/http:|https:|ftp:/.test(link.split('/')[0]));
	},
	sendRequest: function(req) {
		chrome.extension.sendRequest(req);
	},
	getBG: function() {
		return chrome.extension.getBackgroundPage();
	},
	findP: function(t, sel) {
		return $(t).filter(sel).length ? t : $(t).parents(sel)[0];
	},
	localTimeFromUTC: function() { 	
		var mydate = new Date();
		var getcurrentDate = mydate.getDate();
		var getcurrentMonth =mydate.getMonth()+1;
		var showDate = getcurrentMonth+"月"+getcurrentDate+"日"; 
		//alert(showDate);
		return showDate;
	}
};
var note = {
	focusId: -1,
	addNote: function(){
		
		var p = document.getElementById("note-id");

		p.innerHTML += '<li class = "title" data-id = ' +row.id +'><h1> <span>'+row.title+'</span> <time>'+util.localTimeFromUTC()+'</time></h1></li>';
		window.open('NoteEdit.html','_blank');
		alert(ok);
	},
	SaveNote:function(){
		var NoteContent = document.getElementById("text").value;

		localStorage.setItem ('NoteContent', NoteContent);
	 	//localStorage.NoteContent=NoteContent;
	 	//document.write(localStorage.NoteContent);
	 	alert(localStorage.getItem('NoteContent'));
	},
	function cls(){
		with(event.srcElement)
		if(value == defaultValue) value= "";
	}

};
var row ={
	id :1,
	title :"new note",

};



