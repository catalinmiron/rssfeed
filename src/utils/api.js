import $ from 'jquery';

function constructUrl(type, query) {
  const URL = 'https://ajax.googleapis.com/ajax/services/feed';

  return `${URL}/${type}?v=1.0&output=json&num=200&q=${encodeURIComponent(query)}`
}

// Because of CORS, I decided to go with jQuery.
export function getFeed(type, query, callback) {
  const url = constructUrl(type, query);

  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function (result) {
      if(!callback) return;
      if(result.responseStatus === 200) {
          if(type === 'find') {
            callback(null, result.responseData.entries);
          } else {
            callback(null, result.responseData.feed)
          }
      } else {
          callback(new Error('failed to get feed from ' + url));
      }
    }
  });
}
