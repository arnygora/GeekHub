function buttonClickHandler(event)
{
	let elementId = event.target.id;
    handlerEvent(elementId)
}

$('button').click(buttonClickHandler);

function handlerEvent(elementId) {
	switch(elementId) {
  case 'add': {
  	$('.block').addClass('text-format');
    break;
  }
  case 'remove': {
      $('.block').removeClass('text-format');
      break;
  }
  case 'toggle': {
      $('.block').toggleClass('text-format');
      break;
  }
  case 'get': {
	  let attr = $('#get').attr('id');
	  $('p').text('ID of button "getAttr" = ' + attr);
      break;
  }
  case 'set': {
	  $('#set').attr('class', 'button-style');
      break;
  }
  case 'alert': {
      alert('Message called by click on "alertOnClick" button');
      break;
  }
  case 'trigger': {
      $('#alert').trigger('click');
      break;
  }
  case 'clone': {
      $('#clone').clone().appendTo('li.clone').text('cloned').css('display', 'block');
        break;
    }
    case 'closest': {
      let parent = $('#closest').closest('ul');
      $('p').text(parent[0]);
      console.log(parent);
        break;
    }
    case 'each': {
        let buttonArray = $('.buttons li button');
        let text = "";
        $(buttonArray).each(function(index, element){
            text += " " + $(element).text();
        });
        $('p').text(text);
        console.log(text);
        break;
    }
    case 'find': {
        let findButton = $('.buttons').find('find');
        console.log(findButton);
        break;
    }
    case 'fadeIn': {
        $( ".fadein-text" ).fadeIn(2000);
        break;
    }
    case 'fadeOut': {
        $( ".fadeout-text" ).fadeOut(2000);
        break;
    }
    case 'hide': {
        $( ".hide-text" ).hide(2000);
        break;
    }
    case 'show': {
        $( ".show-text" ).show(2000);
        break;
    }
    case 'data': {

        let attr = document.getElementById('data').attributes;
        console.log(attr);

        let dataVar = $('#data');
        console.log('height= ' + dataVar.outerHeight() + 'px');
        console.log('width= ' + dataVar.outerWidth() + 'px');
        let position = dataVar.position();
        console.log(position);
        console.log(dataVar.parent());
        console.log(dataVar.prev());
        console.log(dataVar.next());
        console.log('button text= ' + $(dataVar).text());

        break;
    }
  default:
    break
	}
}
