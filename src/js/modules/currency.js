// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const CW = {
  currency() {
    $.getJSON('http://www.floatrates.com/daily/gbp.json', (data) => {
      const nameUSD = '<span class="currency__name">United States Dollar</span>';
      let valueUSD = '<span class="currency__value">';
      valueUSD += data.usd.rate.toFixed(5);
      valueUSD += '</span>';
      const nameEuro = '<span class="currency__name">Euro</span>';
      let valueEuro = '<span class="currency__value">';
      valueEuro += data.usd.rate.toFixed(5);
      valueEuro += '</span>';
      $('#currency__relation').append(nameUSD, valueUSD, nameEuro, valueEuro);

      function onAjaxSuccess() {
        const items = [];
        $.each(data, (key, val) => {
          let html = '';
          if (typeof val[key] !== 'object') {
            html += `<span class="currency__name">${val.name}</span>`;
            html += `<span class="currency__value">${val.rate.toFixed(5)}</span>`;
          }
          items.push(`${html}`);
        });
        $('#currency__strip').html(items.join(''));
      }
      onAjaxSuccess();
    });
  },
};

export default CW;
