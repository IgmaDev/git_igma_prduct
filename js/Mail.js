var GestorMail = {
	Init: function() {
		$('#btnSendMail').click(function(){ GestorMail.SendMail(); })
	},

	SendMail: function(){
	$.ajax({
	  type: "POST",
	  url: "https://mandrillapp.com/api/1.0/messages/send.json",
	  data: {
	    'key': 'a0a6c0c2a46452b5f82639cf611294a1-us19',
	    'message': {
	      'from_email': 'isc.damianorozco@outlook.com',
	      'to': [
	          {
	            'email': 'isc.damianorozco@gmail.com',
	            'name': 'RECIPIENT NAME (OPTIONAL)',
	            'type': 'to'
	          }
	        ],
	      'autotext': 'true',
	      'subject': 'Hello!',
	      'html': 'This is a test message from damian'
	    }
	  }
	 }).done(function(response) {
	   console.log(response); // if you're into that sorta thing
	 });
	},
}